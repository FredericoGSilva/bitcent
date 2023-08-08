import { Auth, GoogleAuthProvider, User, getAuth, onIdTokenChanged, signInWithPopup, signOut } from "firebase/auth";
import userSystem from "../../core/user/User"
import { app } from "../configuration/app";

export default class Authentication {

    private _authentication: Auth

    constructor() {
       this._authentication = getAuth(app)
    }

    // converte usuario firebase -> usuario do sistema.
    private convertToUser(userFirebase: User | null): userSystem | null {
        if (!userFirebase?.email) {
            return null
        }
        const alternativeName = userFirebase.email!.split('@')[0]
        return {
            id: userFirebase.uid,
            name: userFirebase.displayName ?? alternativeName,
            email: userFirebase.email
        }
    }

    async loginGoogle(): Promise<userSystem | null> {
        const response = await signInWithPopup(this._authentication, new GoogleAuthProvider)
        return this.convertToUser(response.user)
    }

    async logout(): Promise<void> {
        await signOut(this._authentication)
    }

    // monitorar o estado. Alterar o código
    toMonitor(functionToMonitor: (user: userSystem | null) => void): () => void { 
        return onIdTokenChanged(this._authentication, async(userFirebase) => {
            const convertedUser = this.convertToUser(userFirebase)
            functionToMonitor(convertedUser)
        })
    }
}