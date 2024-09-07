"use client"
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
        
        <form onSubmit={handleSubmit} className="flex items-center justify-center">
            <div>
            <select className="bg-slate-700 text-xl px-3 text-zinc-200 h-[60px] rounded-l-[10px]">
                <option value="IND" className=""></option>
            </select>
            </div>
            <div>
                <input type="text" onChange={e => setInput(e.target.value)} value={input} className=" focus:outline-none py-2 px-6 w-[30rem] md:w-[20rem] h-[60px] text-xl rounded-r-[10px] bg-slate-100" placeholder="Enter UID"/>
            </div>
        </form>
        
    )
}