"use client"
import NoPlayerFound from "@/components/noplayerfound"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

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
      <div className="max-w-full w-full overflow-x-hidden">
        {data ? <p>Got info {JSON.stringify(data)}</p> : <NoPlayerFound/>}
      </div>
   )}
}
 
