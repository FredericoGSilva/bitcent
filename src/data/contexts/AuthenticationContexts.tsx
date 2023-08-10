import User from "@/logic/core/user/User"
import AuthenticationFirebase from "@/logic/firebase/authentication/Authentication"
import { createContext, useState, useEffect } from "react"

interface Authentication {
    loading: boolean
    user: User | null
    loginGoogle: () => Promise<User | null> 
    logout: () => Promise<void>
}

const AuthenticationContext = createContext<Authentication>({
    loading: true,
    user: null,
    loginGoogle: async () => null,
    logout: async () => {}
})

export default AuthenticationContext 

export function AuthenticationProvider(props: any) {
    const [loading, setLoading] = useState<boolean>(true)
    const [user, setUser] = useState<User | null>(null)
    const classAuthentication = new AuthenticationFirebase()

    useEffect(() => {
        const cancel = classAuthentication.toMonitor(function(user) {
            setUser(user)
            setLoading(false)
        })
        return () => cancel()
    })

    async function loginGoogle(): Promise<User | null> {
        const user = await classAuthentication.loginGoogle()
        setUser(user)
        return user
    }

    async function logout(): Promise<void> {
        await classAuthentication.logout()
        setUser(null)
    }

    return (
        <AuthenticationContext.Provider value={{
            loading,
            user,
            loginGoogle,
            logout
        }}>
            {props.children}
        </AuthenticationContext.Provider>
    )
}