import { CheckCircle } from "lucide-react"

export function MethodologySection() {
  return (
    <section id="metodologia" className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Header */}
          <div className="space-y-3 max-w-3xl">
            <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm font-medium text-red-600">
              Metodologia Proprietária
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              MÉTODO PRISMA™
            </h2>
            <p className="text-gray-500 text-base sm:text-lg md:text-xl">
              Framework proprietário aplicado em dezenas de operações multicanal, unindo dados, funil e execução com
              foco em ROAS e margem.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-8 mt-10 w-full max-w-5xl lg:grid-cols-2">
            {/* Card da esquerda com selo "Exclusivo" */}
            <div className="relative rounded-lg border bg-gradient-to-b from-red-50 to-white p-6 shadow-sm flex flex-col space-y-6">
              {/* Selo de Exclusividade */}
              <div className="absolute top-0 right-0">
                <div className="absolute transform rotate-45 bg-red-600 text-white text-xs font-semibold text-center py-1 right-[-35px] top-[32px] w-[170px]">
                  Exclusivo
                </div>
              </div>

              {[
                {
                  title: "Diagnóstico Estratégico Profundo",
                  desc: "Análise completa do negócio, mercado, concorrência e funil atual antes de qualquer execução.",
                },
                {
                  title: "Desenho de Funil com Intenção Comercial",
                  desc: "Estruturação de jornada completa do cliente com foco em conversão e experiência.",
                },
                {
                  title: "Setup Técnico e Integrações",
                  desc: "Implementação de rastreamento, automações e integrações entre plataformas para visibilidade total.",
                },
                {
                  title: "Campanhas com Foco em ROI",
                  desc: "Criação e lançamento de campanhas orientadas por dados e focadas em retorno sobre investimento.",
                },
              ].map((item, i) => (
                <div key={i} className="space-y-2 text-left">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Card da direita */}
            <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm space-y-6">
              {[
                {
                  title: "Otimização com Pulso Diário",
                  desc: "Monitoramento constante e ajustes baseados em dados para maximizar performance.",
                },
                {
                  title: "Relatórios com Leitura Executiva",
                  desc: "Análises detalhadas com insights acionáveis e recomendações estratégicas claras.",
                },
                {
                  title: "Escalonamento Validado",
                  desc: "Expansão gradual e controlada com base em resultados comprovados e ROI positivo.",
                },
              ].map((item, i) => (
                <div key={i} className="space-y-2 text-left">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 font-bold">
                    {i + 5}
                  </div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}

              {/* Box de resultados */}
              <div className="mt-auto rounded-lg bg-red-50 p-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 shrink-0" />
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
