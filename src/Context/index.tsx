import { createContext } from "react"
import { GithubContextType, GithubContextProps } from "../interfaces"

export const GithubContext = createContext({} as GithubContextType)

export function GithubContextProvider({ children }: GithubContextProps) {



    return (
        <GithubContext.Provider value={{

        }}>
            {children}
        </GithubContext.Provider>
    )
}