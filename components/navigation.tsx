"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/language-selector"
import { ThemeToggle } from "@/components/theme-toggle"
import { Code2, BookOpen, Zap } from "lucide-react"

export function Navigation() {
  const pathname = usePathname()
  const currentLanguage = pathname.split("/")[2] || "python"
  const isCheatSheet = pathname.includes("/cheatsheet")
  const isPractice = pathname.includes("/practice")

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href={`/cheatsheet/${currentLanguage}`} className="flex items-center space-x-2">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">CodeCrip</span>
            </Link>

            <div className="flex items-center space-x-1">
              <Button variant={isCheatSheet ? "default" : "ghost"} size="sm" asChild>
                <Link href={`/cheatsheet/${currentLanguage}`} className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Cheat Sheet</span>
                </Link>
              </Button>

              <Button variant={isPractice ? "default" : "ghost"} size="sm" asChild>
                <Link href={`/practice/${currentLanguage}`} className="flex items-center space-x-2">
                  <Zap className="h-4 w-4" />
                  <span>Practice</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSelector currentLanguage={currentLanguage} />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
