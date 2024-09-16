"use client"
import { useState } from "react"

export default function LeaderboardRegion( {setRegion} ){

    const regions = [
        {regionName: "Vietnam", id: "vn"},
        {regionName: "India", id: "ind"},
        {regionName: "Thailand", id: "th"},
        {regionName: "Brazil", id: "br"},
        {regionName: "Singapore", id: "sg"},
        {regionName: "Middle East", id: "me"}
    ]

    function refreshLeaderboard(e){
        setRegion(e.target.value)
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