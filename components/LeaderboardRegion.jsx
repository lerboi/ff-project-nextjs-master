"use client"
import { useState } from "react"

export default function LeaderboardRegion(){
    const [region, setRegion] = useState("vn")

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

    function refreshLeaderboard(){
        
    }

    return(
        <>
        <label className="text-white text-2xl">Region</label>
        <form onChange={refreshLeaderboard}>
          <select className="w-96">
            {regions.map(region => {
                return <option key={region.id} value={region.id}>{region.regionName}</option>
            })}
          </select>
        </form>
        </>
    )
}