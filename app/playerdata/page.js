"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function PlayerData(){
   const searchParams = useSearchParams()
   const router = useRouter()
   const [data, setData] = useState(null)
   const uid = searchParams.get("uid")
   const [loading, setLoading] = useState(true)
   
   useEffect(() => {
      async function fetchPlayerData(){
         const APIurl = "https://free-ff-api-src-5plp.onrender.com/api/v1/account?region=IND&uid="
         const playerUrl = APIurl + uid
            try{
               const response = await fetch(playerUrl, {
                  method: "GET",
                  headers: {
                     "Content-Type": "application/json"
                  }
               })
         
               if (response.ok){
                  const playerData = await response.json()
         
                  if (playerData && Object.keys(playerData).length > 0) {
                     setData(playerData)
                     setLoading(false)
                  } else {
                     setData(null)
                     setLoading(false)
                  }
               } else {
                  setData(null)}
                  setLoading(false)
            }
            catch(err){
               console.log(err)
               setLoading(false)
            }
         }
         fetchPlayerData()
   }, [uid])  

   if (loading){
      return <h1>Loading</h1>
   }

 return(
    <>
    {data ? JSON.stringify(data.basicInfo.nickname) : <h1>No data</h1>}
    </>
 )}
