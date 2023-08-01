import { MdDeleteForever } from "react-icons/md"
import { AiFillCheckCircle } from "react-icons/ai"

type Props = {
    text: string
    id: number
    deleteItemCompleted: (n: number)=> void
}

export const CompletedItem = ({text, id, deleteItemCompleted}: Props)=> {

    return(
            <div key={id} className="flex bg-slate-500/40 rounded-md items-center justify-between group p-6  transition-all duration-100">
                <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white cursor-pointer"><AiFillCheckCircle className="text-emerald-500 w-full h-full"/></div>
                    <span className="text-zinc-500 font-xl ml-8 line-through">{text}</span>
                </div>
                <div onClick={()=>deleteItemCompleted(id)} className="opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                    <MdDeleteForever  className="text-red-400 text-2xl cursor-pointer"/>
                </div>
            </div>
    )
}