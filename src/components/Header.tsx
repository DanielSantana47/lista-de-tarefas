import { ModeContext } from "@/contexts/InputContext";
import { useContext } from "react";
export const Header = ()=> {
    return(
        <header className="flex justify-center mt-8 mx-4">
            <h1 className="text-3xl text-emerald-500">Lista de Tarefas</h1>
        </header>
    )
}