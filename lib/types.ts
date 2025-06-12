export interface Language {
  id: string
  name: string
  sections: CheatSheetSection[]
}

export interface CheatSheetSection {
  id: string
  title: string
  description?: string
  examples: CodeExample[]
}

export interface CodeExample {
  title: string
  code: string
  description?: string
}

export interface Challenge {
  id: string
  title: string
  description: string
  difficulty: "Easy" | "Medium" | "Hard"
  category: string
  starterCode?: string
  expectedKeywords: string[]
  examples?: string[]
}
