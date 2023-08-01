import { MdDeleteForever } from "react-icons/md";

type Props = {
    text: string
    id: number
    deleteItem: (n: number)=> void
    checkItem: (n: number)=> void
}

export const TodoItem = ({text, id, deleteItem, checkItem}: Props)=> {
    return(
                <div key={id} className="flex bg-slate-500/60 rounded-md items-center justify-between p-6  transition-all duration-100 group">
                    <div className="flex items-center">
                        <div onClick={()=>checkItem(id)} className="w-6 h-6 rounded-full bg-white cursor-pointer"></div>
                        <span className="text-zinc-300 font-semibold font-xl ml-8">{text}</span>
                    </div>
                    <div onClick={()=>deleteItem(id)} className="opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                        <MdDeleteForever  className="text-red-400 text-2xl cursor-pointer"/>
                    </div>
                </div>
    )
}