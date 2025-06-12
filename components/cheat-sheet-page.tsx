"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { CheatSheetSidebar } from "@/components/cheat-sheet-sidebar"
import { CheatSheetContent } from "@/components/cheat-sheet-content"
import type { Language } from "@/lib/types"

interface CheatSheetPageProps {
  language: Language
}

export function CheatSheetPage({ language }: CheatSheetPageProps) {
  const [activeSection, setActiveSection] = useState("getting-started")

  const handleClickSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleVisibleSection = (sectionId: string) => {
    setActiveSection(sectionId)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">
            {language.name} <span className="text-muted-foreground">cheatsheet</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            The {language.name} cheat sheet is a one-page reference for the {language.name} programming language.
          </p>
        </div>

        <div className="flex gap-8">
          <CheatSheetSidebar
            sections={language.sections}
            activeSection={activeSection}
            onSectionChange={handleClickSection}
          />
          <CheatSheetContent
            language={language}
            activeSection={activeSection}
            onSectionChange={handleVisibleSection}
          />
        </div>
      </div>
    </div>
  )
}
