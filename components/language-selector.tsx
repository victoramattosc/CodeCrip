"use client"

import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { languages } from "@/lib/data"

interface LanguageSelectorProps {
  currentLanguage: string
}

export function LanguageSelector({ currentLanguage }: LanguageSelectorProps) {
  const router = useRouter()
  const pathname = usePathname()

  const currentLang = languages.find((lang) => lang.id === currentLanguage)

  const handleLanguageChange = (languageId: string) => {
    const pathSegments = pathname.split("/")
    pathSegments[2] = languageId
    router.push(pathSegments.join("/"))
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center space-x-2">
          <span>{currentLang?.name || "Python"}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.id}
            onClick={() => handleLanguageChange(language.id)}
            className="flex items-center space-x-2"
          >
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
