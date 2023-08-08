import { User } from "firebase/auth";
import userSystem from "../../core/user/User"

export default class Authentication {

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
}