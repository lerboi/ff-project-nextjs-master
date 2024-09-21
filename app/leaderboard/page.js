"use client"
import { useState, useEffect } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useRouter } from "next/navigation"
import LeaderboardRegion from "@/components/LeaderboardRegion"

export default function Leaderboard() {
  const router = useRouter()
  const [players, setPlayers] = useState(null) //data fetched from api
  const [loading, setLoading]= useState(true) 
  const [region, setRegion] = useState("vn") //pass to LeaderboardRegion component to refresh page onChange

  useEffect(()=> {
    const getData = async () => {
        const api = `http://localhost:3000/api/lbAPI?region=${region}`
        try{
            const response = await fetch(api, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (response.ok){
                const playerData = await response.json()
                setLoading(false)
                setPlayers(playerData)
            } 
            else {
              setLoading(false)
              setPlayers(null)
            }
        }
        catch(err){
            console.log(err)
            setLoading(false)
            setPlayers(null)
        }
    }
    getData()
  }, [region])

  function showPlayerInfo(uid, region){
    router.push(`http://localhost:3000/playerdata?uid=${uid}&region=${region}`)
  }

  if (!players && !loading){
    return <h1 className="text-white">Cant find player data</h1>
  }

  if (loading){
    return (
        <div className="flex justify-center items-start">
            <div className="mt-16">
                <h1 className="text-white">Loading...</h1>
            </div>
        </div>
    )
  }

  else{
    return (
      <>
      <div className="flex flex-col items-center">
        <LeaderboardRegion setRegion={setRegion}/>
      </div>
      <div className="w-full xl:ml-32 xl:max-w-[900px] py-10">
          <div className="w-full h-[3px] mb-10 bg-slate-300"></div>
          <h1 className="ml-10 text-2xl text-white font-bold mb-5">Leaderboard</h1>
          <Table>
            <TableHeader className="text-slate-300">
              <TableRow>
                <TableHead className="w-[100px]">Rank</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Level</TableHead>
                <TableHead>Region</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-slate-200 text-xl font-bold">
              {players.map((player, index) => (
                <TableRow
                  key={player.rank}
                  className={index % 2 === 0 ? "bg-slate-700" : "bg-slate-500"}
                >
                  <TableCell className="font-medium">{player.pos}</TableCell>
                  <TableCell value={player.account_id}><span className="hover:cursor-pointer" onClick={() => showPlayerInfo(player.account_id, player.region.toLowerCase())}>{player.nickname}</span></TableCell>
                  <TableCell>{player.level}</TableCell>
                  <TableCell>{player.region}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </>
        
      )
    }
  }
  