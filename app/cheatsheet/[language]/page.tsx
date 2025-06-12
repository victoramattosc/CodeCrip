import { CheatSheetPage } from "@/components/cheat-sheet-page"
import { languages } from "@/lib/data"
import { notFound } from "next/navigation"

interface PageProps {
  params: {
    language: string
  }
}

export default async function CheatSheet(props: PageProps) {
  const { params } = props
  const { language: languageId } = await params

  const language = languages.find((lang) => lang.id === languageId)

  if (!language) {
    notFound()
  }

  return <CheatSheetPage language={language} />
}

export async function generateStaticParams() {
  return languages.map((language) => ({
    language: language.id,
  }))
}
