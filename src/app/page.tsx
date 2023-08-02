"use client"

import { Header } from "@/components/Header"
import { Input } from "@/components/Input"
import { InputProvider } from "@/contexts/InputContext"

const Page = ()=> {
  return(
    <div className="">
      <div className="container mx-auto">
        <Header/>
            <Input/>
      </div>
    </div>
  )
}

export default Page