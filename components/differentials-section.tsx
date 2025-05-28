import { CheckCircle, Award, Target, BarChart4, Zap, Layers, MessageSquare, RefreshCw, Shield } from "lucide-react"

export function DifferentialsSection() {
  return (
    <section id="diferenciais" className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 font-medium">
              Diferenciais Operacionais
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">Por Que Escolher a LSG Digital</h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-xl/relaxed xl:text-xl/relaxed">
              Nossa abordagem única combina estratégia, execução e análise para resultados reais
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
            {/* Card 1 */}
            <div className="group flex flex-col h-full space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-red-200 hover:translate-y-[-5px]">
              <div className="rounded-full bg-red-100 p-3 w-14 h-14 flex items-center justify-center">
                <Target className="h-7 w-7 text-red-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Estratégia sob medida</h3>
                <p className="text-gray-500 text-left">
                  Nada aqui é reciclado. Cada estratégia é única para seu negócio, baseada em análise profunda do seu
                  mercado e objetivos.
                </p>
              </div>
              <div className="mt-auto pt-4">
                <div className="h-1 w-12 bg-red-600 rounded-full group-hover:w-16 transition-all"></div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group flex flex-col h-full space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-red-200 hover:translate-y-[-5px]">
              <div className="rounded-full bg-red-100 p-3 w-14 h-14 flex items-center justify-center">
                <BarChart4 className="h-7 w-7 text-red-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Diagnóstico antes da mídia</h3>
                <p className="text-gray-500 text-left">
                  Performance nasce da leitura correta do negócio e do mercado. Analisamos antes de investir seu
                  orçamento.
                </p>
              </div>
              <div className="mt-auto pt-4">
                <div className="h-1 w-12 bg-red-600 rounded-full group-hover:w-16 transition-all"></div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group flex flex-col h-full space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-red-200 hover:translate-y-[-5px]">
              <div className="rounded-full bg-red-100 p-3 w-14 h-14 flex items-center justify-center">
                <Award className="h-7 w-7 text-red-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Mentalidade de CFO e visão de CEO</h3>
                <p className="text-gray-500 text-left">
                  Atuamos com foco em resultados financeiros e visão estratégica, garantindo ROI positivo em cada ação.
                </p>
              </div>
              <div className="mt-auto pt-4">
                <div className="h-1 w-12 bg-red-600 rounded-full group-hover:w-16 transition-all"></div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group flex flex-col h-full space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-red-200 hover:translate-y-[-5px]">
              <div className="rounded-full bg-red-100 p-3 w-14 h-14 flex items-center justify-center">
                <Zap className="h-7 w-7 text-red-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Campanhas estratégicas completas</h3>
                <p className="text-gray-500 text-left">
                  Criação com copy, funil e criativo alinhados à estratégia para maximizar conversões e minimizar custo
                  de aquisição.
                </p>
              </div>
              <div className="mt-auto pt-4">
                <div className="h-1 w-12 bg-red-600 rounded-full group-hover:w-16 transition-all"></div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group flex flex-col h-full space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-red-200 hover:translate-y-[-5px]">
              <div className="rounded-full bg-red-100 p-3 w-14 h-14 flex items-center justify-center">
                <Layers className="h-7 w-7 text-red-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Integração completa</h3>
                <p className="text-gray-500 text-left">
                  Kommo CRM, bots, funis e automações para maximizar conversões e garantir que nenhum lead seja perdido.
                </p>
              </div>
              <div className="mt-auto pt-4">
                <div className="h-1 w-12 bg-red-600 rounded-full group-hover:w-16 transition-all"></div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group flex flex-col h-full space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-red-200 hover:translate-y-[-5px]">
              <div className="rounded-full bg-red-100 p-3 w-14 h-14 flex items-center justify-center">
                <MessageSquare className="h-7 w-7 text-red-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Relatórios com análise interpretativa</h3>
                <p className="text-gray-500 text-left">
                  Relatórios semanais com insights acionáveis, não apenas números. Transformamos dados em decisões.
                </p>
              </div>
              <div className="mt-auto pt-4">
                <div className="h-1 w-12 bg-red-600 rounded-full group-hover:w-16 transition-all"></div>
              </div>
            </div>

            {/* Card 7 */}
            <div className="group flex flex-col h-full space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-red-200 hover:translate-y-[-5px]">
              <div className="rounded-full bg-red-100 p-3 w-14 h-14 flex items-center justify-center">
                <CheckCircle className="h-7 w-7 text-red-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Suporte ao time comercial</h3>
                <p className="text-gray-500 text-left">
                  Acompanhamento de atendimento para maximizar conversões, com treinamentos e scripts otimizados.
                </p>
              </div>
              <div className="mt-auto pt-4">
                <div className="h-1 w-12 bg-red-600 rounded-full group-hover:w-16 transition-all"></div>
              </div>
            </div>

            {/* Card 8 */}
            <div className="group flex flex-col h-full space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-red-200 hover:translate-y-[-5px]">
              <div className="rounded-full bg-red-100 p-3 w-14 h-14 flex items-center justify-center">
                <RefreshCw className="h-7 w-7 text-red-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Cultura de teste e melhoria</h3>
                <p className="text-gray-500 text-left">
                  Melhoria contínua e atualização com IA e mentorias para garantir que estamos sempre à frente da
                  concorrência.
                </p>
              </div>
              <div className="mt-auto pt-4">
                <div className="h-1 w-12 bg-red-600 rounded-full group-hover:w-16 transition-all"></div>
              </div>
            </div>

            {/* Card 9 */}
            <div className="group flex flex-col h-full space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-red-200 hover:translate-y-[-5px]">
              <div className="rounded-full bg-red-100 p-3 w-14 h-14 flex items-center justify-center">
                <Shield className="h-7 w-7 text-red-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Zero reclamações públicas</h3>
                <p className="text-gray-500 text-left">
                  Alta taxa de renovação e contratos de longo prazo. Nossos clientes são nossos maiores defensores.
                </p>
              </div>
              <div className="mt-auto pt-4">
                <div className="h-1 w-12 bg-red-600 rounded-full group-hover:w-16 transition-all"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
