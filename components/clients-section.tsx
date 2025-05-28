"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Instagram } from "lucide-react"
import { Button } from "../components/ui/button"

export function ClientsSection() {
  const clients = [
    {
      name: "Royal Palm Plaza Resort",
      instagram: "https://www.instagram.com/royalpalmplazaresort/",
      imageUrl: "/clients/royalpalmplazaresort.jpg",
      description: "Resort de luxo",
    },
    {
      name: "Yázigi Swiss Park",
      instagram: "https://www.instagram.com/yazigi_swiss_park/",
      imageUrl: "/clients/yazigi_swiss_park.jpg",
      description: "Escola de idiomas premium",
    },
    {
      name: "Olenka Cosméticos",
      instagram: "https://www.instagram.com/olenkacosmeticoscampinas/",
      imageUrl: "/clients/olenkacosmeticoscampinas.jpg",
      description: "Cosméticos premium",
    },
    {
      name: "Vidotti Contabilidade",
      instagram: "https://www.instagram.com/vidotticontabilidade2002/",
      imageUrl: "/clients/vidotti.jpg",
      description: "Serviços contábeis",
    },
    {
      name: "Léia Carvalho Store",
      instagram: "https://www.instagram.com/leiacarvalhostore/",
      imageUrl: "/clients/leia.jpg",
      description: "Moda e acessórios",
    },
    {
      name: "Hazap Informática",
      instagram: "https://www.instagram.com/hazapinformatica/",
      imageUrl: "/clients/hazap-informatica.jpg", // Corrigir nome do arquivo
      description: "Soluções em TI",
    },
    {
      name: "Luiz Connection",
      instagram: "https://www.instagram.com/luizgoncalvesconnection/",
      imageUrl: "/clients/luizgoncalvesconnection.jpg",
      description: "Consultoria empresarial",
    },
    {
      name: "Instituto Kell",
      instagram: "https://www.instagram.com/institutokell/",
      imageUrl: "/clients/institutokell.jpg",
      description: "Estética avançada",
    },
    {
      name: "Novo Olhar",
      instagram: "https://www.instagram.com/novo_olhar_revelesuabeleza/",
      imageUrl: "/clients/novo-olhar.jpg",
      description: "Estética e beleza",
    },
    {
      name: "Tominnicelli",
      instagram: "https://www.instagram.com/tominnicelli/",
      imageUrl: "/clients/tominnicelli.jpg",
      description: "Moda masculina",
    },
    {
      name: "Jessica Teixeira",
      instagram: "https://www.instagram.com/jessica.teixeiraaa/",
      imageUrl: "/clients/jessica-teixeira.jpg",
      description: "Micropigmentação",
    },
    {
      name: "D Concept",
      instagram: "https://www.instagram.com/dconceptbsb/",
      imageUrl: "/clients/dconcept.jpg",
      description: "Estética e beleza",
    },
    {
      name: "RR Drones",
      instagram: "https://www.instagram.com/rrdrones/",
      imageUrl: "/clients/rrdrones.jpg",
      description: "Filmagens aéreas",
    },
    {
      name: "Instituto LF",
      instagram: "https://www.instagram.com/instituto.lf/",
      imageUrl: "/clients/instituto-lf.jpg",
      description: "Estética avançada",
    },
    {
      name: "Dra. Luise Ferrão",
      instagram: "https://www.instagram.com/dra.luiseferrao/",
      imageUrl: "/clients/dra-luise-ferrao.jpg",
      description: "Medicina estética",
    },
    {
      name: "Mapple Comunicação",
      instagram: "https://www.instagram.com/mapplecomunicacao/",
      imageUrl: "/clients/mapple.jpg",
      description: "Agência de marketing",
    },
    {
      name: "Cyan Agência",
      instagram: "https://www.instagram.com/cyan.agencia/",
      imageUrl: "/clients/cyan.jpg",
      description: "Agência de marketing",
    },
    {
      name: "We Beauty Agency",
      instagram: "https://www.instagram.com/webeautyagency_/",
      imageUrl: "/clients/we-beauty.jpg",
      description: "Marketing para estética",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [itemsToShow, setItemsToShow] = useState(4)

  // Define número de itens por tela
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width >= 1536) setItemsToShow(5)        // Increased from 4
      else if (width >= 1280) setItemsToShow(4)   // Kept as 4
      else if (width >= 1024) setItemsToShow(3)   // Kept as 3
      else if (width >= 768) setItemsToShow(2)    // Kept as 2
      else setItemsToShow(1)                      // Kept as 1
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalSlides = clients.length - itemsToShow + 1

  // Carrossel automático
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
    }, 3000)
    return () => clearInterval(interval)
  }, [isPaused, totalSlides])

  return (
    <section id="clientes" className="w-full py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center">
        <div className="text-center space-y-4">
          <span className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 font-medium">
            Clientes de Sucesso
          </span>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Grandes Marcas Confiam na LSG Digital
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
            Empresas líderes em seus segmentos que escolheram nossa engenharia de crescimento
          </p>
        </div>

        {/* Carrossel */}
        <div className="w-full h max-w-6xl mt-8 relative flex justify-center items-center">
          <div
            className="overflow-hidden w-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / itemsToShow}%` }}
                >
<div className="relative bg-white rounded-2xl border border-gray-100 shadow-lg mt-6  mb-9 overflow-hidden flex flex-col items-center h-[18rem]">
                    <div className="w-24 h-24 bg-gray-100 rounded-full overflow-hidden mt-8 relative">
                      <Image
                        src={client.imageUrl || "/placeholder.svg"}
                        alt={`Logo de ${client.name}`}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="p-4 flex flex-col flex-grow justify-between mt-3 text-center w-full">
                      <div>
                        <h3 className="font-bold text-lg mb-2">{client.name}</h3>
                        <p className="text-gray-500 text-sm mb-4">{client.description}</p>
                      </div>
                      <div className="flex justify-center gap-2 mt-auto">
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
                      </div>
                    </div>

                    <div className="absolute right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-lg shadow">
                      Cliente Premium
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores */}
          <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 flex space-x-2">
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

        {/* Call to Action */}
        <div className="mt-16">
          <Button className="bg-red-600 hover:bg-red-700" asChild>
            <a href="#contato">Seja o Próximo Case de Sucesso</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
