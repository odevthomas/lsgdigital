import Image from "next/image"
import { Quote } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="w-full py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 font-medium">
              Depoimentos
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">O Que Nossos Clientes Dizem</h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed">
              Resultados reais compartilhados por quem confia em nosso trabalho
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 mt-12">
            {/* Testimonial 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-50 to-white p-8 shadow-lg border border-red-100">
              <div className="absolute top-4 right-4 text-red-200 opacity-30">
                <Quote className="h-16 w-16" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <blockquote className="text-gray-700 italic text-lg mb-6 relative">
                  "A LSG Digital transformou completamente nossa abordagem de marketing. Antes, gastávamos muito em
                  anúncios com retorno duvidoso. Agora, temos controle total, previsibilidade e um ROI que supera todas
                  as nossas expectativas. O Método PRISMA™ realmente funciona."
                </blockquote>

                <div className="mt-auto pt-4 border-t border-red-100">
                  <div className="flex items-center space-x-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white shadow-md">
                      <Image src="/ricardo-mendes.png" alt="Avatar de Ricardo Mendes" fill className="object-cover" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">Ricardo Mendes</h3>
                      <p className="text-sm text-gray-500">CEO, Resort Exclusive</p>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-4 w-4 text-yellow-500"
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

            {/* Testimonial 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-50 to-white p-8 shadow-lg border border-red-100">
              <div className="absolute top-4 right-4 text-red-200 opacity-30">
                <Quote className="h-16 w-16" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <blockquote className="text-gray-700 italic text-lg mb-6 relative">
                  "Depois de trabalhar com várias agências que prometiam muito e entregavam pouco, encontramos na LSG
                  Digital um parceiro que realmente entende nosso negócio. O diagnóstico inicial foi revelador e a
                  execução é impecável. Nosso custo por matrícula caiu pela metade em apenas 3 meses."
                </blockquote>

                <div className="mt-auto pt-4 border-t border-red-100">
                  <div className="flex items-center space-x-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-white shadow-md">
                      <Image src="/mariana-costa.png" alt="Avatar de Mariana Costa" fill className="object-cover" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-lg">Mariana Costa</h3>
                      <p className="text-sm text-gray-500">Diretora, Instituto Educacional Premium</p>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-4 w-4 text-yellow-500"
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
          </div>

          {/* CTA Button */}
          <div className="mt-12">
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
