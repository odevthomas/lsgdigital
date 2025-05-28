"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Instagram, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ClientsSection() {
  // Array com os dados de todos os clientes
  const clients = [
    {
      name: "Royal Palm Plaza Resort",
      instagram: "https://www.instagram.com/royalpalmplazaresort/",
      imageUrl: "/placeholder.svg?height=120&width=120",
      description: "Resort de luxo",
    },
    {
      name: "Yázigi Swiss Park",
      instagram: "https://www.instagram.com/yazigi_swiss_park/",
      imageUrl: "/placeholder.svg?height=120&width=120",
      description: "Escola de idiomas premium",
    },
    {
      name: "Olenka Cosméticos",
      instagram: "https://www.instagram.com/olenkacosmeticoscampinas/",
      imageUrl: "/placeholder.svg?height=120&width=120",
      description: "Cosméticos premium",
    },
    {
      name: "Vidotti Contabilidade",
      instagram: "https://www.instagram.com/vidotticontabilidade2002/",
      imageUrl: "/placeholder.svg?height=120&width=120",
      description: "Serviços contábeis",
    },
    {
      name: "Léia Carvalho Store",
      instagram: "https://www.instagram.com/leiacarvalhostore/",
      imageUrl: "/placeholder.svg?height=120&width=120",
      description: "Moda e acessórios",
    },
    {
      name: "Hazap Informática",
      instagram: "https://www.instagram.com/hazapinformatica/",
      imageUrl: "/placeholder.svg?height=120&width=120",
      description: "Soluções em TI",
    },
    {
      name: "Luiz Connection",
      instagram: "https://www.instagram.com/luizgoncalvesconnection/",
      imageUrl: "/placeholder.svg?height=120&width=120",
      description: "Consultoria empresarial",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef(null)

  // Determina quantos cards mostrar por vez com base na largura da tela
  const getItemsToShow = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1280) return 4 // xl
      if (window.innerWidth >= 1024) return 3 // lg
      if (window.innerWidth >= 640) return 2 // sm
      return 1 // mobile
    }
    return 3 // default fallback
  }

  const itemsToShow = typeof window !== "undefined" ? getItemsToShow() : 3
  const totalSlides = clients.length - itemsToShow + 1

  // Avança o carrossel automaticamente
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
    }, 2000) // Muda a cada 2 segundos

    return () => clearInterval(interval)
  }, [isPaused, totalSlides])

  return (
    <section id="clientes" className="w-full py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 font-medium">
              Clientes de Sucesso
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Grandes Marcas Confiam na LSG Digital</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Empresas líderes em seus segmentos que escolheram nossa engenharia de crescimento
            </p>
          </div>

          {/* Carrossel de clientes em uma única linha */}
          <div className="w-full max-w-6xl mt-8 relative">
            <div
              className="overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              ref={carouselRef}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
              >
                {clients.map((client, index) => (
                  <div key={index} className="flex-shrink-0 px-3" style={{ width: `${100 / itemsToShow}%` }}>
                    <div className="bg-white rounded-xl border-2 border-red-100 shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-full">
                      <div className="relative w-full h-48 bg-gray-100">
                        <Image
                          src={client.imageUrl || "/placeholder.svg"}
                          alt={`Logo de ${client.name}`}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-0 right-0 bg-red-600 text-white text-xs px-2 py-1 rounded-bl-lg">
                          Cliente Premium
                        </div>
                      </div>
                      <div className="p-6 flex flex-col items-center text-center h-[180px]">
                        <h3 className="font-bold text-xl mb-1">{client.name}</h3>
                        <p className="text-gray-500 text-sm mb-4">{client.description}</p>
                        <div className="flex gap-2 mt-auto">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex items-center gap-2 border-red-600 text-red-600 hover:bg-red-50"
                            asChild
                          >
                            <a href={client.instagram} target="_blank" rel="noopener noreferrer">
                              <Instagram className="h-4 w-4" />
                              <span>Instagram</span>
                            </a>
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex items-center gap-2 text-gray-600 hover:text-red-600"
                            asChild
                          >
                            <a href="#cases" className="flex items-center">
                              <span>Ver Case</span>
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicadores de slide */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === index ? "w-8 bg-red-600" : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-12">
            <Button className="bg-red-600 hover:bg-red-700" as="a" href="#contato">
              Seja o Próximo Case de Sucesso
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
