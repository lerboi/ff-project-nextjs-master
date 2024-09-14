'use client'

import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

const mockPlayers = [
  { id: 1, name: "Alex", profilePic: "/placeholder.svg?height=100&width=100", kda: "3.5/2.1/4.2" },
  { id: 2, name: "Sam", profilePic: "/placeholder.svg?height=100&width=100", kda: "4.2/1.8/3.7" },
  { id: 3, name: "Jordan", profilePic: "/placeholder.svg?height=100&width=100", kda: "2.8/2.5/5.1" },
]

export function PlayerCardJsx({ playerId, ranking }) {
  const player = mockPlayers.find(p => p.id === playerId) || mockPlayers[0]

  return (
    (<Card className="w-36 h-48 relative overflow-hidden bg-slate-500">
      <div
        className="absolute top-2 right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
        #{ranking}
      </div>
      <CardContent className="p-6 flex flex-col items-center justify-center h-full">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <Image
            src={player.profilePic}
            alt={`${player.name}'s profile picture`}
            width={96}
            height={96}
            className="object-cover" />
        </div>
        <h2 className="text-xl font-bold mb-2">{player.name}</h2>
        <p className="text-sm text-muted-foreground">
          K/D/A: <span className="font-semibold">{player.kda}</span>
        </p>
      </CardContent>
    </Card>)
  );
}