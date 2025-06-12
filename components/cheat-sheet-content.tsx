"use client"

import { useEffect } from "react"
import { CheatSheetSection as CheatSheetSectionComponent } from "@/components/cheat-sheet-section"
import type { Language } from "@/lib/types"

interface CheatSheetContentProps {
  language: Language
  activeSection: string
  onSectionChange: (sectionId: string) => void
}

export function CheatSheetContent({
  language,
  activeSection,
  onSectionChange,
}: CheatSheetContentProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onSectionChange(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    )

    language.sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [language.sections, onSectionChange])

  return (
    <div className="flex-1 space-y-12">
      {language.sections.map((section) => (
        <CheatSheetSectionComponent
          key={section.id}
          section={section}
          language={language.id}
        />
      ))}
    </div>
  )
}
