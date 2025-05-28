import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react"

export function CTABanner() {
  return (
    <section className="w-full py-12 md:py-24 bg-red-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Título e descrição */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Pronto para transformar tráfego em centro de lucro?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90">
              Somos uma agência de performance especializada em tráfego pago, funis inteligentes, automação de
              atendimento e integração entre mídia e vendas.
            </p>
          </div>

          {/* Botão principal */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-lg font-bold px-6 py-4"
              as="a"
              href="#contato"
            >
              QUERO MAIS INFORMAÇÕES
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Benefícios abaixo do CTA */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm sm:text-base text-white/90 max-w-4xl">
            {[
              "Diagnóstico gratuito",
              "Sem compromisso",
              "Resposta em até 24h",
            ].map((text, index) => (
              <div key={index} className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
