import { MdDeleteForever } from "react-icons/md";

type Props = {
    text: string
    id: number
    deleteItem: (n: number)=> void
    checkItem: (n: number)=> void
}

export const TodoItem = ({text, id, deleteItem, checkItem}: Props)=> {
    return(
                <div key={id} className="flex bg-emerald-600 rounded-md items-center justify-between px-2 py-3 sm:p-6  transition-all duration-100 group shadow-xl">
                    <div className="flex items-center">
                        <div onClick={()=>checkItem(id)} className="sm:w-6 sm:h-6 w-4 h-4 rounded-full bg-zinc-200 cursor-pointer"></div>
                        <span className="text-zinc-200 font-semibold text-sm lg:text-lg ml-2 lg:ml-8">{text}</span>
                    </div>
                    <div onClick={()=>deleteItem(id)} className="opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                        <MdDeleteForever  className="text-red-400 text-2xl cursor-pointer"/>
                    </div>
                </div>
    )
}