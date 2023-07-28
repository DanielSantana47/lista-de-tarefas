import { MdLightMode } from "react-icons/md";
export const Header = ()=> {
    return(
        <header className="flex justify-between mt-8">
            <MdLightMode className=' text-zinc-300 w-10 h-10 hover:rotate-90 transition-all'/>
            <h1 className="text-3xl text-zinc-300">Lista de Tarefas</h1>
        </header>
    )
}