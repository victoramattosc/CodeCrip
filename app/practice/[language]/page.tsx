import { PracticePage } from "@/components/practice-page"
import { languages } from "@/lib/data"
import { notFound } from "next/navigation"

interface PageProps {
  params: {
    language: string
  }
}

export default async function Practice(props: PageProps) {
  const { params } = props
  const { language: languageId } = await params

  const language = languages.find((lang) => lang.id === languageId)

  if (!language) {
    notFound()
  }

  return <PracticePage language={language} />
}

export async function generateStaticParams() {
  return languages.map((language) => ({
    language: language.id,
  }))
}
