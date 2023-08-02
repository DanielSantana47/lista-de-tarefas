import { ReactNode, createContext, useState } from "react";

 type ModeProps = {
    dark: boolean
    setDark: (n: boolean)=> void
}


export const ModeContext = createContext<ModeProps | null>(null) 

type ProviderProps = {
    children: ReactNode
}

export const ModeProvider = ({children}: ProviderProps)=> {
    const [dark, setDark] = useState(false)

    return(
        <ModeContext.Provider value={{dark, setDark}}>
            {children}
        </ModeContext.Provider>
    )
}