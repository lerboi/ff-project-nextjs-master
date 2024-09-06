"use client"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SearchPlayer(){
    const router = useRouter()
    const [input, setInput] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        console.log(input)
        router.push(`/playerdata?uid=${encodeURIComponent(input)}`)
    }

    return(
        <div className="flex flex-shrink-0 justify-center items-center">
            <form onSubmit={handleSubmit}>
                <select className="bg-slate-700 text-xl px-3 text-zinc-200 h-[60px] rounded-l-[10px]">
                    <option value="IND" className=""></option>
                </select>
                <input type="text" onChange={e => setInput(e.target.value)} value={input} className="focus:outline-none py-2 px-6 w-[20rem] h-[60px] text-xl rounded-r-[10px] bg-slate-100" placeholder="Enter UID"/>
            </form>
        </div>
    )
}