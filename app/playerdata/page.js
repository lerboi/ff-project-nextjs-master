"use client"
import NoPlayerFound from "@/components/NoPlayerFound"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import ClanInfo from "@/components/ClanInfo"
import ClashSquadInfo from "@/components/ClashSquadInfo"

export default function PlayerData(){
   const [data, setData] = useState(null)
   const [loading, setLoading] = useState(true)
   const searchParams = useSearchParams()

   useEffect(() => {
      const getPlayerData = async() =>{
         const uid = searchParams.get("uid")
         const api = `http://localhost:3000/api/playerapi?uid=${uid}`
         try{
            const response = await fetch(api, {
               method: "GET",
               headers: {
                  "Content-Type": "application/json"
               }
            })

            if(response.ok){
               const playerdata = await response.json()
               setLoading(false)
               setData(playerdata)
            } else {
               setLoading(false)
               setData(null)
               console.log("response status 400")
            }
         }
         catch (err){
            setLoading(false)
            setData(null)
            console.log(err)
         }
      }

      getPlayerData()
   }, [])


if(loading) {return(
   <h1>Load</h1>
)}
if(!loading){
   return(
      <>
      <div className="max-w-full w-full overflow-x-hidden">
        {data ? 

         <div className="flex flex-col gap-5">
            <div className="bg-slate-600 flex w-full h-[200px] bg-[url('../public/FF_HeroBG.jpg')] bg-center bg-cover">
               <div className="flex flex-col justify-end p-10">
                  <p className="font-bold text-white text-2xl">{JSON.stringify(data.basicInfo.nickname).replace(/^.|.$/g, "")}</p>
                  <p className="text-slate-300 fo">{JSON.stringify(data.socialInfo.signature).replace(/^.|.$/g, "")}</p>
               </div>
            </div>
            <div className="h-[250px] bg-slate-800 border-t-2 border-zinc-500">
               <ClanInfo data={data} />
            </div>
            <div className="h-[200px] bg-slate-800 border-t-2 border-zinc-500">
               <ClashSquadInfo data={data} />
            </div>
         </div> 

        : <NoPlayerFound/>}
      </div> 
      </> 
   )}
}
 
