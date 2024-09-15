'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"

export function PlayerCardJsx() {
  const [cardData, setCardData] = useState([])

  useEffect(()=> {
    async function getCardData(){
      const api = "http://localhost:3000/api/homeCardsAPI"
      try{
        const response = await fetch(api, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })

        if (response.ok){
          const data = await response.json()
          setCardData(data)
        }
      }
      catch(err){
        console.log(err)
      }
    }
    getCardData()
  }, [])
  console.log(cardData)
  return (
    <div className='flex gap-5'>
      {cardData.map((card) => (
        <Card key={card.account_id} className="w-36 h-48 relative overflow-hidden bg-slate-500">
        <div
          className="absolute top-2 right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
          #1
        </div>
        <CardContent className="p-6 flex flex-col items-center justify-center h-full">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
            <Image
              src={""}
              alt={`profile picture`}
              width={96}
              height={96}
              className="object-cover" />
          </div>
          <h2 className="text-xl font-bold mb-2">{card.nickname}</h2>
          <p>{card.region}</p>
          <p className="text-sm text-muted-foreground">
            RANK POINTS <span className="font-semibold">{card.br_ranking_points}</span>
          </p>
        </CardContent>
      </Card>
      ))}
    </div> 
  )
}