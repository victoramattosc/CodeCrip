"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import type { CheatSheetSection } from "@/lib/types"
import { cn } from "@/lib/utils"

interface CheatSheetSidebarProps {
  sections: CheatSheetSection[]
  activeSection: string
  onSectionChange: (sectionId: string) => void
}

export function CheatSheetSidebar({ sections, activeSection, onSectionChange }: CheatSheetSidebarProps) {
  return (
    <div className="w-64 shrink-0">
      <div className="sticky top-8">
        <h3 className="font-semibold mb-4">Table of Contents</h3>
        <ScrollArea className="h-[calc(100vh-200px)]">
          <div className="space-y-1">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="ghost"
                size="sm"
                className={cn("w-full justify-start text-left", activeSection === section.id && "bg-accent")}
                onClick={() => onSectionChange(section.id)}
              >
                {section.title}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
