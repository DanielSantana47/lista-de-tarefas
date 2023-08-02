import { useState } from "react"
import { TodoItem } from "./TodoItem"
import { CompletedItem } from "./CompletedItem"

export const Input = ()=> {
    type List = {
        text: string,
        id: number
    }

    const [input, setInput] = useState('')
    const [id, setId] = useState(0)
    const [todoList, setTodoList] = useState<List[]>([])
    const [completedList, setCompletedList] = useState<List[]>([])


    const handleAddButton = ()=> {
        if(input.trim() === '') return
        setTodoList(
            [...todoList, {text: input, id: id + 1}]
        )
        setId (id + 1)
        setInput('')
    }
    
    const handleDeleteButton = (key: number)=> {
        setTodoList(
            todoList.filter(item=> (
                item.id !== key
            ))
        )

    }

    const handleCheckItem = (key: number)=> {
        const completedItem = todoList.find(item=> item.id === key)

        if (completedItem) {
            setCompletedList(
                [...completedList, {id: completedItem.id, text: completedItem.text}]
            )
        }

        setTimeout(()=>handleDeleteButton(key), 0)
    }
    
    const handleDeleteCompletedItem = (key: number)=> {
        setCompletedList(
            completedList.filter(item=>(
                item.id !== key
            ))
        )
    }

    const handleCheckCompletedItem = (key: number)=> {
        const completedItem = completedList.find(item=> item.id === key)

        if (completedItem) {
            setTodoList(
                [...todoList, {id: completedItem.id, text: completedItem.text}]
            )
        }

        setTimeout(()=>handleDeleteCompletedItem(key), 0)
    }

    
    return(
        <>
            <div className="w-full flex items-center justify-center mt-16">
                <input 
                    type="text" 
                    className="py-4 px-8 w-full lg:w-2/3 bg-black/30 outline-none rounded-full text-xl text-emerald-500 placeholder:text-emerald-500/60 hover:bg-black/40 transition-all duration-150"
                    placeholder="Adicionar Tarefa"
                    value={input}   
                    onChange={e=>setInput(e.target.value)}
                    />
                <div onClick={handleAddButton} className="flex text-3xl justify-center items-center p-5 text-zinc-300 bg-emerald-600 rounded-full w-4 h-4 -ml-11 sm:-ml-14 cursor-pointer hover:bg-emerald-700 transition-all duration-150">+</div>
            </div>
            
            {todoList.length > 0 && 
                <section className="mx-auto px-1 lg:px-3 flex flex-col justify-center mt-16 gap-4 bg-transparent lg:w-2/3">
                    <h2 className="text-2xl text-emerald-500 mb-6 font-semibold">À fazer</h2>
                    {todoList.map(item=>(
                        <div key={item.id}>
                            <TodoItem id={item.id} text={item.text.substring(0, 27)} deleteItem={()=>handleDeleteButton(item.id)} checkItem={()=>handleCheckItem(item.id)}/>
                        </div>
                    ))
                    }
                </section>
            }

            {completedList.length > 0 && 
                <section className="lg:px-3 px-1 lg:w-2/3 mx-auto flex flex-col justify-center mt-16 gap-4">
                    <h2 className="text-2xl text-slate-400 mb-6 font-semibold">Completo</h2>
                    {completedList.map(item=> (
                        <div key={item.id}>
                            <CompletedItem text={item.text.substring(0, 27)} id={item.id} deleteItemCompleted={()=>handleDeleteCompletedItem(item.id)} checkCompletedItem={()=>handleCheckCompletedItem(item.id)}/>
                        </div>
                    ))}
                </section>
            }
    
        </>
    )
}