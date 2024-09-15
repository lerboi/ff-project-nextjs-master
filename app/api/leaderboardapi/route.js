import { NextResponse } from "next/server";

export async function GET(){
    const API_KEY = process.env.API_KEY
    const region = "vn"
    const api = `https://www.ffapi.freefireinfo.site/leaderboard/${region}/br?key=${API_KEY}`

    try{
        const response = await fetch(api, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (response.ok){
            const data = await response.json()
            return NextResponse.json(data)
        } else{
            return NextResponse.json("nope")
        }
    }
    catch(err){
        console.log(err)
    }
    
}