import { ReactNode, createContext, useState } from "react";

export type InputProps = {
    input: string,
    id: number
    setInput: (n: string)=> void
    setId: (n: number)=> void
}

export type SetList = {
    list: InputProps[]
    setList: (n: any)=> void
}

export const InputContext = createContext<SetList | null>(null)

type ProviderProps = {
    children: ReactNode
}

export const InputProvider = ({children}: ProviderProps)=> {
    const [input, setInput] = useState('')
    const [id, setId] = useState(0)

    const [list, setList] = useState([])

    return(
        <InputContext.Provider value={{list, setList}}>
            {children}
        </InputContext.Provider>
    )
}