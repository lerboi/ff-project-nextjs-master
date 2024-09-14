import { NextResponse, NextRequest } from "next/server";


export async function GET(req){
    const { searchParams } = new URL(req.url)
    const uid = searchParams.get("uid")
    const region = searchParams.get("region")
    console.log(region)
    const API_KEY = process.env.API_KEY
    const api = `https://www.info.freefireinfo.site/api/${region}/${uid}?key=${API_KEY}`
    console.log(api)

    try{
        const response = await fetch(api, {
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            }
        })

        if (response.ok){
            const data = await response.json()
            return NextResponse.json(data)
        }
        else{
            return NextResponse.json(null)
        }
        }
    catch(err){
        return NextResponse.json("Failed")
    }
}