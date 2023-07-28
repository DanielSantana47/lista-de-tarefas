import { ReactNode, createContext, useState } from "react";

type InputProps = {
    input: string,
    id: number
    setInput: (n: string)=> void
    setId: (n: number)=> void
}

export const InputContext = createContext<InputProps | null>(null)

type ProviderProps = {
    children: ReactNode
}

export const InputProvider = ({children}: ProviderProps)=> {
    const [input, setInput] = useState('')
    const [id, setId] = useState(0)

    return(
        <InputContext.Provider value={{input, id, setId, setInput}}>
            {children}
        </InputContext.Provider>
    )
}