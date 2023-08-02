"use client"

import { Header } from "@/components/Header"
import { Input } from "@/components/Input"
import { ModeContext, ModeProvider } from "@/contexts/InputContext"
import { useContext } from "react"

const Page = ()=> {

  return(
          <div>
            <div className="container mx-auto px-2">
                <Header/>
                <Input/>
            </div>
          </div>
  )
}

export default Page