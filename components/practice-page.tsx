"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { ChallengeList } from "@/components/challenge-list"
import { ChallengeEditor } from "@/components/challenge-editor"
import type { Language, Challenge } from "@/lib/types"
import { getChallengesForLanguage } from "@/lib/data"

interface PracticePageProps {
  language: Language
}

export function PracticePage({ language }: PracticePageProps) {
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null)
  const [completedChallenges, setCompletedChallenges] = useState<Set<string>>(new Set())
  const challenges = getChallengesForLanguage(language.id)

  const handleChallengeComplete = (challengeId: string) => {
    setCompletedChallenges((prev) => new Set([...prev, challengeId]))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">
            {language.name} <span className="text-muted-foreground">Practice</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Interactive coding challenges to improve your {language.name} skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <ChallengeList
            challenges={challenges}
            selectedChallenge={selectedChallenge}
            completedChallenges={completedChallenges}
            onChallengeSelect={setSelectedChallenge}
          />

          {selectedChallenge && (
            <ChallengeEditor
              challenge={selectedChallenge}
              language={language}
              onComplete={() => handleChallengeComplete(selectedChallenge.id)}
              isCompleted={completedChallenges.has(selectedChallenge.id)}
            />
          )}
        </div>
      </div>
    </div>
  )
}
