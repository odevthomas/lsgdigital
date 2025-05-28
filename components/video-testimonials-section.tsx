"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

type VideoTestimonial = {
  id: number
  name: string
  role: string
  quote: string
  thumbnail: string
  videoUrl: string
  previewUrl?: string
  duration: string
}

const testimonials: VideoTestimonial[] = [
  {
    id: 1,
    name: "Aline Faria",
    role: "Empreendedora",
    quote: "A LSG Digital transformou completamente nossa abordagem de marketing. O ROI superou todas as nossas expectativas.",
    thumbnail: "/thumbnail/cliente1.png",
    videoUrl: "/Videos/Cliente1.mp4",
    previewUrl: "/Videos/Cliente1.mp4",
    duration: "2:55",
  },
  {
    id: 2,
    name: "Kely Santana",
    role: "Empreendedora",
    quote: "Nosso custo por matrícula caiu pela metade em apenas 3 meses. O diagnóstico inicial foi revelador.",
    thumbnail: "/thumbnail/cliente2.png",
    videoUrl: "/Videos/Cliente2.mp4",
    previewUrl:"/Videos/Cliente2.mp4",
    duration: "3:12",
  },
  {
    id: 3,
    name: "Gil Barbosa",
    role: "Proprietário, Gil Barbosa Beauty",
    quote: "Aumentamos nossa base de clientes em 75% com as estratégias da LSG Digital. Resultados impressionantes.",
    thumbnail: "/thumbnail/cliente3.png",
    videoUrl: "/Videos/Cliente3.mp4",
    previewUrl: "/Videos/Cliente3.mp4",
    duration: "2:38",
  },
]

export function VideoTestimonialsSection() {
  const [hoveredVideoId, setHoveredVideoId] = useState<number | null>(null)
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null)
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({})

  const handleMouseEnter = (id: number) => {
    setHoveredVideoId(id)
    const videoElement = videoRefs.current[id]
    if (videoElement) {
      videoElement.currentTime = 0
      videoElement.play()
    }
  }

  const handleMouseLeave = (id: number) => {
    setHoveredVideoId(null)
    const videoElement = videoRefs.current[id]
    if (videoElement) {
      videoElement.pause()
      videoElement.currentTime = 0
    }
  }

  const handlePlayVideo = (id: number) => {
    setPlayingVideoId(id)
  }

  return (
    <section id="video-depoimentos" className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 font-medium">
            Depoimentos em Vídeo
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            O Que Nossos Clientes Têm a Dizer
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Veja histórias reais de transformação e resultados com a LSG Digital
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 w-full max-w-7xl">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                onMouseEnter={() => handleMouseEnter(testimonial.id)}
                onMouseLeave={() => handleMouseLeave(testimonial.id)}
              >
<div className="relative w-full h-[400px] sm:h-[420px] md:h-[560px] bg-gray-200">
                  {playingVideoId === testimonial.id ? (
                    <video
                      src={testimonial.videoUrl}
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      onEnded={() => setPlayingVideoId(null)}
                    />
                  ) : (
                    <>
                      {testimonial.previewUrl && (
                        <video
                          ref={(el) => videoRefs.current[testimonial.id] = el}
                          src={testimonial.previewUrl}
                          muted
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                            hoveredVideoId === testimonial.id 
                              ? 'opacity-100' 
                              : 'opacity-0'
                          }`}
                        />
                      )}
                      <Image
                        src={testimonial.thumbnail}
                        alt={testimonial.name}
                        layout="fill"
                        objectFit="cover"
                        className={`absolute inset-0 transition-opacity duration-300 ${
                          hoveredVideoId === testimonial.id 
                            ? 'opacity-0' 
                            : 'opacity-100'
                        }`}
                      />
                      <div 
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        onClick={() => handlePlayVideo(testimonial.id)}
                      >
                        <div className="bg-red-600 rounded-full p-4 hover:bg-red-700 transition-colors">
                          <Play className="text-white w-8 h-8" fill="currentColor" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                        {testimonial.duration}
                      </div>
                    </>
                  )}
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <p className="text-gray-600 italic text-sm mt-2">
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}