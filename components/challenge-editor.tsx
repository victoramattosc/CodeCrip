"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import type { Challenge, Language } from "@/lib/types"
import { CheckCircle, Play, RotateCcw } from "lucide-react"
import { cn } from "@/lib/utils"

interface ChallengeEditorProps {
  challenge: Challenge
  language: Language
  onComplete: () => void
  isCompleted: boolean
}

export function ChallengeEditor({ challenge, language, onComplete, isCompleted }: ChallengeEditorProps) {
  const [code, setCode] = useState(challenge.starterCode || "")
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null)
  const [isRunning, setIsRunning] = useState(false)

  const runCode = async () => {
    setIsRunning(true)
    setFeedback(null)

    // Simulate code execution delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Simple validation based on expected keywords
    const isValid = challenge.expectedKeywords.every((keyword) => code.toLowerCase().includes(keyword.toLowerCase()))

    if (isValid) {
      setFeedback({ type: "success", message: "Correto! Desafio concluído com sucesso!" })
      onComplete()
    } else {
      setFeedback({
        type: "error",
        message: `Tente novamente. Certifique-se de usar: ${challenge.expectedKeywords.join(", ")}`,
      })
    }

    setIsRunning(false)
  }

  const resetCode = () => {
    setCode(challenge.starterCode || "")
    setFeedback(null)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <span>{challenge.title}</span>
              {isCompleted && <CheckCircle className="h-5 w-5 text-green-500" />}
            </CardTitle>
            <Badge
              variant={
                challenge.difficulty === "Easy"
                  ? "default"
                  : challenge.difficulty === "Medium"
                    ? "secondary"
                    : "destructive"
              }
            >
              {challenge.difficulty}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Descrição:</h4>
              <p className="text-muted-foreground">{challenge.description}</p>
            </div>

            {challenge.examples && challenge.examples.length > 0 && (
              <div>
                <h4 className="font-semibold mb-2">Exemplo:</h4>
                <div className="bg-muted p-3 rounded-lg">
                  <pre className="text-sm">{challenge.examples[0]}</pre>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Editor de Código</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder={`Escreva seu código ${language.name} aqui...`}
            className="min-h-[300px] font-mono text-sm"
          />

          <div className="flex items-center space-x-2">
            <Button onClick={runCode} disabled={isRunning} className="flex items-center space-x-2">
              <Play className="h-4 w-4" />
              <span>{isRunning ? "Executando..." : "Executar"}</span>
            </Button>

            <Button variant="outline" onClick={resetCode} className="flex items-center space-x-2">
              <RotateCcw className="h-4 w-4" />
              <span>Resetar</span>
            </Button>
          </div>

          {feedback && (
            <div
              className={cn(
                "p-3 rounded-lg",
                feedback.type === "success"
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
              )}
            >
              {feedback.message}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
