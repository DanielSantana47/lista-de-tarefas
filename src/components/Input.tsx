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
    const [todoList, setTodoList] = useState<List[]>([
        {text: 'lavar o carro', id: 0}
    ])
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

        setTimeout(()=>handleDeleteButton(key))
    }
    
    const handleDeleteCompletedItem = (key: number)=> {
        setCompletedList(
            completedList.filter(item=>(
                item.id !== key
            ))
        )
    }

    return(
        <>
            <div className="w-full flex items-center justify-center mt-16">
                <input 
                    type="text" 
                    className="py-4 px-8 w-2/3 bg-black/30 outline-none rounded-full text-xl text-zinc-300 placeholder:text-zinc-300 hover:bg-black/40 transition-all duration-150"
                    placeholder="Add item"
                    value={input}   
                    onChange={e=>setInput(e.target.value)}
                    />
                <div onClick={handleAddButton} className="flex text-3xl justify-center items-center p-5 bg-blue-400 rounded-full w-4 h-4 -ml-14 cursor-pointer hover:bg-emerald-400 transition-all duration-150">+</div>
            </div>
            
            {todoList.length > 0 && 
                <section className="w-2/3 mx-auto px-3 flex flex-col justify-center mt-16 shadow-xl gap-4">
                    <h2 className="text-2xl text-zinc-400 mb-6 font-semibold">To do</h2>
                    {todoList.map(item=>(
                        <div key={item.id}>
                            <TodoItem id={item.id} text={item.text} deleteItem={()=>handleDeleteButton(item.id)} checkItem={()=>handleCheckItem(item.id)}/>
                        </div>
                    ))
                    }
                </section>
            }

            {completedList.length > 0 && 
                <section className="w-2/3 mx-auto px-3 flex flex-col justify-center mt-16 shadow-xl gap-4">
                    <h2 className="text-2xl text-zinc-400 mb-6 font-semibold">Completed</h2>
                    {completedList.map(item=> (
                        <div key={item.id}>
                            <CompletedItem text={item.text} id={item.id} deleteItemCompleted={()=>handleDeleteCompletedItem(item.id)}/>
                        </div>
                    ))}
                </section>
            }
    
        </>
    )
}