"use client"

import { CompletedList } from "@/components/CompletedList"
import { Header } from "@/components/Header"
import { Input } from "@/components/Input"
import { TodoList } from "@/components/TodoList"
import { InputProvider } from "@/contexts/InputContext"

const Page = ()=> {
  return(
    <div className="">
      <div className="container mx-auto">
        <Header/>
        <InputProvider>
            <Input/>
            <TodoList/>
            <CompletedList/>
        </InputProvider>
      </div>
    </div>
  )
}

export default Page