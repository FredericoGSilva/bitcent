import User from "@/logic/core/user/User"
import { createContext } from "react"

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