"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ActionButtons() {
  const scrollToContact = () => {
    const element = document.getElementById('contato')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-start w-full">
      <Button
        onClick={scrollToContact}
        size="lg"
        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium h-12 px-6 rounded-md transition"
      >
        Falar com Especialista
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  )
}