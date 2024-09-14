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

export default function Leaderboard() {
  const [players, setPlayers] = useState(null)
  const [loading, setLoading]= useState(true)

  useEffect(()=> {
    const getData = async () => {
        const api = "http://localhost:3000/api/leaderboardapi"
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
        }
        catch(err){
            console.log(err)
            setLoading(false)
            setPlayers(null)
        }
    }
    getData()
  }, [])

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
        <div className="w-full xl:ml-32 xl:max-w-[900px] py-10">
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
                  <TableCell>{player.nickname}</TableCell>
                  <TableCell>{player.level}</TableCell>
                  <TableCell>{player.region}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )
    }
  }
  