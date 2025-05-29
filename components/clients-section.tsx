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
      imageUrl: "/clients/hazap-informatica.jpg", 
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
    {
      name: "Pedro Salles",
      instagram: "https://www.instagram.com/opedro.sallles/",
      imageUrl: "/clients/pedro-salles.jpg",
      description: "Influenciador de Investimentos",
    },
    {
      name: "In Beauty",
      instagram: "https://www.instagram.com/inbeautyluxury/",
      imageUrl: "/clients/in-beauty.jpg",
      description: "Salão de Beleza",
    },
    {
      name: "CasaVr",
      instagram: "https://www.instagram.com/casavrsalao/",
      imageUrl: "/clients/casavr.jpg",
      description: "Salão de Beleza",
    },
    {
      name: "Borelli",
      instagram: "https://www.instagram.com/borelli_estetica_bemestar/",
      imageUrl: "/clients/borelli.jpg",
      description: "Clínica de Massagens",
    },
    {
      name: "OAK Studio",
      instagram: "https://www.instagram.com/oakstudiocambui/",
      imageUrl: "/clients/oak-studio.jpg",
      description: "Salão de Beleza",
    },
    {
      name: "AmoVacinas",
      instagram: "https://www.instagram.com/amovacinasoficial/",
      imageUrl: "/clients/amovacinas.jpg",
      description: "Clínica de Vacinas",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [itemsToShow, setItemsToShow] = useState(4)

  // Define número de itens por tela
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width >= 1536) setItemsToShow(5)
      else if (width >= 1280) setItemsToShow(4)
      else if (width >= 1024) setItemsToShow(3)
      else if (width >= 768) setItemsToShow(2)
      else setItemsToShow(1)
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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
  }

  return (
    <section id="clientes" className="w-full mt-3 mb-4 py-16 md:py-24 bg-gradient-to-b from-black to-gray-900">
  <div className=" px-4 md:px-6 mx-auto">
    <div className="space-y-6 max-w-3xl mx-auto text-center mb-12">
      <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-red-500 to-red-700 text-white shadow-lg">
        Clientes de Sucesso
      </span>
      <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
        Empresas Líderes Confiam na LSG Digital
      </h2>
      <p className="text-gray-300 md:text-xl/relaxed max-w-2xl mx-auto">
        Marcas de destaque escolhem a LSG Digital por nossa engenharia de tráfego pago, estratégia de autoridade e geração de resultados escaláveis.
      </p>
    </div>

    {/* Carrossel */}
    <div className="w-full max-w-7xl mx-auto relative">
      {/* Botões de navegação (agora visíveis em todos os tamanhos) */}
      <button 
        onClick={prevSlide} 
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-red-600 hover:bg-red-700 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg transform transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        aria-label="Slide anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      
      <button 
        onClick={nextSlide} 
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-red-600 hover:bg-red-700 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg transform transition hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        aria-label="Próximo slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>

      <div
        className="overflow-hidden w-full rounded-xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-3"
              style={{ width: `${100 / itemsToShow}%` }}
            >
              <div className="relative bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden flex flex-col items-center h-[20rem] transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient"></div>

                <div className="w-24 h-24 rounded-full overflow-hidden mt-8 relative shadow-md border-4 border-white">
                  <Image
                    src={client.imageUrl || "/placeholder.svg"}
                    alt={`Logo de ${client.name}`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-5 flex flex-col items-center text-center w-full flex-grow">
                  <h3 className="font-bold text-xl text-gray-800 mb-2">{client.name}</h3>
                  <p className="text-sm text-gray-600 text-center mb-3 leading-relaxed">
                    {client.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-red-600 text-red-600 hover:bg-red-50 transition-all duration-300 rounded-full px-4 mt-2"
                    asChild
                  >
                    <a href={client.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Instagram className="h-4 w-4" />
                      <span>Instagram</span>
                    </a>
                  </Button>
                </div>

                <div className="absolute right-4 bg-gradient-to-r from-red-600 to-red-700 text-white text-xs px-3 py-1 rounded-full shadow-md transform rotate-5 mb-3">
                  Cliente Premium
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicadores REMOVIDOS */}
    </div>

    {/* Call to Action */}
    <div className="mt-16 text-center">
     <Button 
  className="bg-gradient-to-r from-red-600 to-red-700 text-white font-medium px-8 py-3 text-lg rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 text-white hover:shadow-2xl hover:brightness-110" 
  asChild
>
  <a href="#contato" className="flex items-center gap-2">
    <span>Seja o Próximo Case de Sucesso</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
    </svg>
  </a>
</Button>

    </div>
  </div>
</section>

  )
}