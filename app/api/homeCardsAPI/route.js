import { NextResponse } from "next/server";

export async function GET(){
    const API_KEY = process.env.API_KEY
    const apiSG = `https://www.ffapi.freefireinfo.site/leaderboard/sg/br?key=${API_KEY}`
    const apiInd = `https://www.ffapi.freefireinfo.site/leaderboard/ind/br?key=${API_KEY}`
    const apiBr = `https://www.ffapi.freefireinfo.site/leaderboard/br/br?key=${API_KEY}`
    const cardsList = []

    try{
        await fetch(apiSG).then(blob => blob.json()).then(data => cardsList.push(data[0]))
        await fetch(apiInd).then(blob => blob.json()).then(data => cardsList.push(data[0]))
        await fetch(apiBr).then(blob => blob.json()).then(data => cardsList.push(data[0]))
    
        if(cardsList){
            return NextResponse.json(cardsList)
        } else {
            return NextResponse.json(null)
        }
    }
    catch(err){
        console.log(err)
        return NextResponse.json(null)
    }
    
}