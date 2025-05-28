"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Quote, ChevronRight, ChevronLeft } from "lucide-react"

const testimonials = [
  {
    quote: "A LSG Digital transformou completamente nossa abordagem de marketing. Antes, gastávamos muito em anúncios com retorno duvidoso. Agora, temos controle total, previsibilidade e um ROI que supera todas as nossas expectativas. O Método PRISMA™ realmente funciona.",
    name: "Ricardo Mendes",
    role: "CEO, Resort Exclusive",
    avatar: "/ricardo-mendes.png",
  },
  {
    quote: "Depois de trabalhar com várias agências que prometiam muito e entregavam pouco, encontramos na LSG Digital um parceiro que realmente entende nosso negócio. O diagnóstico inicial foi revelador e a execução é impecável. Nosso custo por matrícula caiu pela metade em apenas 3 meses.",
    name: "Mariana Costa",
    role: "Diretora, Instituto Educacional Premium",
    avatar: "/mariana-costa.png",
  },
  {
    quote: "A transformação digital que a LSG nos proporcionou foi incrível. Conseguimos aumentar nossa base de clientes em 75% e otimizar completamente nossos processos de marketing e vendas.",
    name: "Carlos Oliveira",
    role: "Proprietário, Clínica Estética Renova",
    avatar: "/carlos-oliveira.png",
  }
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsToShow, setItemsToShow] = useState(2)

  // Ajusta o número de itens baseado no tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width >= 1024) setItemsToShow(2)  // lg
      else setItemsToShow(1)                // mobile
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const totalSlides = Math.ceil(testimonials.length / itemsToShow)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <section id="depoimentos" className="w-full py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 font-medium">
              Depoimentos
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed">
              Resultados reais compartilhados por quem confia em nosso trabalho
            </p>
          </div>

          <div className="w-full max-w-6xl relative flex items-center justify-center">
            <button 
              onClick={prevSlide} 
              className="absolute left-0 z-10 bg-red-50 hover:bg-red-100 rounded-full p-2 hidden md:block"
            >
              <ChevronLeft className="text-red-600" />
            </button>
            
            <div className="overflow-hidden w-full">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentIndex * 100}%)`,
                  width: `${testimonials.length / itemsToShow * 100}%`
                }}
              >
                {testimonials.reduce((acc, _, index, array) => {
                  if (index % itemsToShow === 0) {
                    const group = array.slice(index, index + itemsToShow)
                    acc.push(
                      <div 
                        key={index} 
                        className="grid md:grid-cols-2 gap-6 flex-shrink-0"
                        style={{ width: `${100 / (testimonials.length / itemsToShow)}%` }}
                      >
                        {group.map((testimonial, idx) => (
                          <div 
                            key={idx} 
                            className="bg-gradient-to-br from-red-50 to-white rounded-2xl p-6 md:p-8 shadow-lg border border-red-100 transform transition-all hover:scale-[1.02]"
                          >
                            <div className="relative h-full flex flex-col">
                              <div className="absolute top-0 right-0 text-red-200 opacity-30">
                                <Quote className="h-12 w-12 md:h-16 md:w-16" />
                              </div>

                              <blockquote className="text-gray-700 italic text-base md:text-lg mb-6 flex-grow">
                                "{testimonial.quote}"
                              </blockquote>

                              <div className="mt-auto pt-4 border-t border-red-100">
                                <div className="flex items-center space-x-4">
                                  <div className="relative h-12 w-12 md:h-16 md:w-16 overflow-hidden rounded-full border-2 border-white shadow-md">
                                    <Image 
                                      src={testimonial.avatar} 
                                      alt={`Avatar de ${testimonial.name}`} 
                                      fill 
                                      className="object-cover" 
                                    />
                                  </div>
                                  <div className="text-left">
                                    <h3 className="font-bold text-base md:text-lg">{testimonial.name}</h3>
                                    <p className="text-xs md:text-sm text-gray-500">{testimonial.role}</p>
                                    <div className="flex items-center mt-1">
                                      {[...Array(5)].map((_, i) => (
                                        <svg
                                          key={i}
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="currentColor"
                                          className="h-3 w-3 md:h-4 md:w-4 text-yellow-500"
                                        >
                                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )
                  }
                  return acc
                }, [])}
              </div>
            </div>

            <button 
              onClick={nextSlide} 
              className="absolute right-0 z-10 bg-red-50 hover:bg-red-100 rounded-full p-2 hidden md:block"
            >
              <ChevronRight className="text-red-600" />
            </button>

            {/* Indicadores de slide */}
            <div className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 flex space-x-2">
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

          {/* CTA Button */}
          <div className="mt-16">
            <a
              href="#video-depoimentos"
              className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3 text-base font-medium text-white shadow-md transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Ver Depoimentos em Vídeo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}