import { CheckCircle } from "lucide-react"

export function MethodologySection() {
  return (
    <section id="metodologia" className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 font-medium">
              Metodologia Proprietária
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">MÉTODO PRISMA™</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Framework proprietário aplicado em dezenas de operações multicanal, unindo dados, funil e execução com
              foco em ROAS e margem
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:gap-8 lg:grid-cols-2 mt-8">
            <div className="relative overflow-hidden rounded-lg border bg-gradient-to-b from-red-50 to-white p-6 shadow-sm">
              <div className="absolute top-0 right-0 h-16 w-16">
                <div className="absolute transform rotate-45 bg-red-600 text-center text-white font-medium py-1 right-[-35px] top-[32px] w-[170px]">
                  Exclusivo
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold">Diagnóstico Estratégico Profundo</h3>
                  <p className="text-gray-500">
                    Análise completa do negócio, mercado, concorrência e funil atual antes de qualquer execução.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold">Desenho de Funil com Intenção Comercial</h3>
                  <p className="text-gray-500">
                    Estruturação de jornada completa do cliente com foco em conversão e experiência.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold">Setup Técnico e Integrações</h3>
                  <p className="text-gray-500">
                    Implementação de rastreamento, automações e integrações entre plataformas para visibilidade total.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 font-bold">
                    4
                  </div>
                  <h3 className="text-xl font-bold">Campanhas com Foco em ROI</h3>
                  <p className="text-gray-500">
                    Criação e lançamento de campanhas orientadas por dados e focadas em retorno sobre investimento.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-6 rounded-lg border p-6 shadow-sm">
              <div className="space-y-2">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 font-bold">
                  5
                </div>
                <h3 className="text-xl font-bold">Otimização com Pulso Diário</h3>
                <p className="text-gray-500">
                  Monitoramento constante e ajustes baseados em dados para maximizar performance.
                </p>
              </div>
              <div className="space-y-2">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 font-bold">
                  6
                </div>
                <h3 className="text-xl font-bold">Relatórios com Leitura Executiva</h3>
                <p className="text-gray-500">
                  Análises detalhadas com insights acionáveis e recomendações estratégicas claras.
                </p>
              </div>
              <div className="space-y-2">
                <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 font-bold">
                  7
                </div>
                <h3 className="text-xl font-bold">Escalonamento Validado</h3>
                <p className="text-gray-500">
                  Expansão gradual e controlada com base em resultados comprovados e ROI positivo.
                </p>
              </div>
              <div className="mt-auto rounded-lg bg-red-50 p-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Resultados Comprovados</h4>
                    <p className="text-sm text-gray-500">
                      R$ 3,6 milhões em vendas geradas com menos de R$ 140 mil investidos. ROAS médio de 26x em contas
                      sob gestão direta.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
