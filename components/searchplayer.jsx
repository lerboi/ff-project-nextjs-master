"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SearchPlayer(){
    const router = useRouter()
    const [input, setInput] = useState("")
    const [region, setRegion] = useState("ind")

    const regions = [
        {regionName: "India", id: "ind"},
        {regionName: "Indonesia", id: "id"},
        {regionName: "Thailand", id: "th"},
        {regionName: "Brazil", id: "br"},
        {regionName: "Singapore", id: "sg"},
        {regionName: "Bangladesh", id: "bd"},
        {regionName: "Pakistan", id: "pk"},
        {regionName: "US", id: "us"},
        {regionName: "Malaysia", id: "my"},
        {regionName: "Vietnam", id: "vn"},
        {regionName: "Taiwan", id: "tw"},
        {regionName: "Middle East", id: "me"}
    ]

    function handleSubmit(e){
        e.preventDefault()
        router.push(`/playerdata?uid=${encodeURIComponent(input)}&region=${region}`)
    }

    return(
        
        <form onSubmit={handleSubmit} className="flex items-center justify-center">
            <div>
            <select onChange={e => setRegion(e.target.value)} id="regionID" className="bg-slate-700 text-xl px-3 text-zinc-200 h-[60px] rounded-l-[10px]">
                {regions.map(region => {
                    return <option key={region.id} value={region.id}>{region.regionName}</option>
                })}
            </select>
            </div>
            <div>
                <input type="text" onChange={e => setInput(e.target.value)} value={input} className=" focus:outline-none py-2 px-6 w-[30rem] md:w-[20rem] h-[60px] text-xl rounded-r-[10px] bg-slate-100" placeholder="Enter UID"/>
            </div>
        </form>
        
    )
}