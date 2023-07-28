

import { InputContext } from "@/contexts/InputContext"
import { useContext, useState } from "react"

export const Input = ()=> {
    const inputCtx = useContext(InputContext)
    const [input, setInput] = useState('')
    const [id, setId] = useState(0)

    return(
        <div className="w-full flex items-center justify-center mt-16">
            <input 
            type="text" 
            className="py-4 px-8 w-2/3 bg-black/30 outline-none rounded-full text-xl text-zinc-300 placeholder:text-zinc-300 hover:bg-black/40 transition-all duration-150"
            placeholder="Add item"
            onChange={e=>setInput(e.target.value)}
            value={input}
            />
            <div className="flex text-3xl justify-center items-center p-5 bg-blue-400 rounded-full w-4 h-4 -ml-14 cursor-pointer hover:bg-emerald-400 transition-all duration-150">+</div>
        </div>
    )
}