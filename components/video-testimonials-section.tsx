import Image from "next/image"
import { Play } from "lucide-react"

export function VideoTestimonialsSection() {
  return (
    <section id="video-depoimentos" className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 font-medium">
              Depoimentos em Vídeo
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">O Que Nossos Clientes Têm a Dizer</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Veja histórias reais de transformação e resultados com a LSG Digital
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3 mt-8">
            {/* Vídeo Depoimento 1 */}
            <div className="flex flex-col space-y-3">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-lg group">
                <Image
                  src="/resort-executive-testimonial.png"
                  alt="Depoimento de Ricardo Mendes"
                  width={360}
                  height={240}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-all">
                  <div className="rounded-full bg-red-600 p-3 shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-700">
                    <Play className="h-8 w-8 text-white" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-red-600 animate-pulse"></div>
                    <span className="text-white text-sm font-medium">2:45</span>
                  </div>
                </div>
              </div>
              <div className="space-y-1 text-left">
                <h3 className="font-bold text-lg">Ricardo Mendes</h3>
                <p className="text-sm text-gray-500">CEO, Resort Exclusive</p>
                <p className="text-gray-600 italic text-sm">
                  "A LSG Digital transformou completamente nossa abordagem de marketing. O ROI superou todas as nossas
                  expectativas."
                </p>
              </div>
            </div>

            {/* Vídeo Depoimento 2 */}
            <div className="flex flex-col space-y-3">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-lg group">
                <Image
                  src="/education-director-testimonial.png"
                  alt="Depoimento de Mariana Costa"
                  width={360}
                  height={240}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-all">
                  <div className="rounded-full bg-red-600 p-3 shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-700">
                    <Play className="h-8 w-8 text-white" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-red-600 animate-pulse"></div>
                    <span className="text-white text-sm font-medium">3:12</span>
                  </div>
                </div>
              </div>
              <div className="space-y-1 text-left">
                <h3 className="font-bold text-lg">Mariana Costa</h3>
                <p className="text-sm text-gray-500">Diretora, Instituto Educacional Premium</p>
                <p className="text-gray-600 italic text-sm">
                  "Nosso custo por matrícula caiu pela metade em apenas 3 meses. O diagnóstico inicial foi revelador."
                </p>
              </div>
            </div>

            {/* Vídeo Depoimento 3 */}
            <div className="flex flex-col space-y-3">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-lg group">
                <Image
                  src="/clinic-owner-testimonial.png"
                  alt="Depoimento de Carlos Oliveira"
                  width={360}
                  height={240}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-all">
                  <div className="rounded-full bg-red-600 p-3 shadow-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-700">
                    <Play className="h-8 w-8 text-white" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-red-600 animate-pulse"></div>
                    <span className="text-white text-sm font-medium">2:38</span>
                  </div>
                </div>
              </div>
              <div className="space-y-1 text-left">
                <h3 className="font-bold text-lg">Carlos Oliveira</h3>
                <p className="text-sm text-gray-500">Proprietário, Clínica Estética Renova</p>
                <p className="text-gray-600 italic text-sm">
                  "Aumentamos nossa base de clientes em 75% com as estratégias da LSG Digital. Resultados
                  impressionantes."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
