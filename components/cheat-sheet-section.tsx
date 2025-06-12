"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/code-block"
import { ChevronDown, ChevronRight } from "lucide-react"
import type { CheatSheetSection as CheatSheetSectionType } from "@/lib/types"
import { cn } from "@/lib/utils"

interface CheatSheetSectionProps {
  section: CheatSheetSectionType
  language: string
}

export function CheatSheetSection({ section, language }: CheatSheetSectionProps) {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <section id={section.id} className="scroll-mt-24">
      <div className="flex items-center space-x-2 mb-6">
        <Button variant="ghost" size="sm" onClick={() => setIsExpanded(!isExpanded)} className="p-0 h-auto">
          {isExpanded ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
        </Button>
        <h2 className="text-2xl font-bold text-primary"># {section.title}</h2>
      </div>

      <div className={cn("space-y-6", !isExpanded && "hidden")}>
        {section.description && <p className="text-muted-foreground">{section.description}</p>}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {section.examples.map((example, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-sm bg-primary/10 text-primary px-2 py-1 rounded">{example.title}</h3>
              </div>

              <CodeBlock code={example.code} language={language} showCopy={true} />

              {example.description && <p className="text-sm text-muted-foreground">{example.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
