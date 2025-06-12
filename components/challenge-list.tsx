"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Challenge } from "@/lib/types"
import { CheckCircle, Circle } from "lucide-react"
import { cn } from "@/lib/utils"

interface ChallengeListProps {
  challenges: Challenge[]
  selectedChallenge: Challenge | null
  completedChallenges: Set<string>
  onChallengeSelect: (challenge: Challenge) => void
}

export function ChallengeList({
  challenges,
  selectedChallenge,
  completedChallenges,
  onChallengeSelect,
}: ChallengeListProps) {
  const groupedChallenges = challenges.reduce(
    (acc, challenge) => {
      if (!acc[challenge.category]) {
        acc[challenge.category] = []
      }
      acc[challenge.category].push(challenge)
      return acc
    },
    {} as Record<string, Challenge[]>,
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Challenges</h2>
        <Badge variant="secondary">
          {completedChallenges.size}/{challenges.length} completed
        </Badge>
      </div>

      {Object.entries(groupedChallenges).map(([category, categoryThallenges]) => (
        <Card key={category}>
          <CardHeader>
            <CardTitle className="text-lg">{category}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {categoryThallenges.map((challenge) => (
              <Button
                key={challenge.id}
                variant="ghost"
                className={cn("w-full justify-start h-auto p-3", selectedChallenge?.id === challenge.id && "bg-accent")}
                onClick={() => onChallengeSelect(challenge)}
              >
                <div className="flex items-center space-x-3 w-full">
                  {completedChallenges.has(challenge.id) ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground" />
                  )}
                  <div className="flex-1 text-left">
                    <div className="font-medium">{challenge.title}</div>
                    <div className="text-sm text-muted-foreground">{challenge.difficulty}</div>
                  </div>
                </div>
              </Button>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
