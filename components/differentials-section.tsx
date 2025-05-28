import {
  CheckCircle,
  Award,
  Target,
  BarChart4,
  Zap,
  Layers,
  MessageSquare,
  RefreshCw,
  Shield,
} from "lucide-react"

export function DifferentialsSection() {
  return (
    <section
      id="diferenciais"
      className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          {/* Título e descrição */}
          <div className="space-y-4 max-w-3xl">
            <span className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 font-medium">
              Diferenciais Operacionais
            </span>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
              Por Que Escolher a LSG Digital
            </h2>
            <p className="text-gray-500 text-base sm:text-lg md:text-xl">
              Nossa abordagem única combina estratégia, execução e análise para resultados reais.
            </p>
          </div>

          {/* Cards em grid responsivo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full max-w-6xl">
            {differentials.map((item, i) => (
              <div
                key={i}
                className="group flex flex-col h-full space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-red-200 hover:translate-y-[-5px]"
              >
                <div className="rounded-full bg-red-100 p-3 w-14 h-14 flex items-center justify-center">
                  <item.icon className="h-7 w-7 text-red-600" />
                </div>
                <div className="space-y-2 text-left">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-500 text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <div className="h-1 w-12 bg-red-600 rounded-full group-hover:w-16 transition-all"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const differentials = [
  {
    icon: Target,
    title: "Estratégia sob medida",
    description:
      "Nada aqui é reciclado. Cada estratégia é única para seu negócio, baseada em análise profunda do seu mercado e objetivos.",
  },
  {
    icon: BarChart4,
    title: "Diagnóstico antes da mídia",
    description:
      "Performance nasce da leitura correta do negócio e do mercado. Analisamos antes de investir seu orçamento.",
  },
  {
    icon: Award,
    title: "Mentalidade de CFO e visão de CEO",
    description:
      "Atuamos com foco em resultados financeiros e visão estratégica, garantindo ROI positivo em cada ação.",
  },
  {
    icon: Zap,
    title: "Campanhas estratégicas completas",
    description:
      "Criação com copy, funil e criativo alinhados à estratégia para maximizar conversões e minimizar custo de aquisição.",
  },
  {
    icon: Layers,
    title: "Integração completa",
    description:
      "Kommo CRM, bots, funis e automações para maximizar conversões e garantir que nenhum lead seja perdido.",
  },
  {
    icon: MessageSquare,
    title: "Relatórios com análise interpretativa",
    description:
      "Relatórios semanais com insights acionáveis, não apenas números. Transformamos dados em decisões.",
  },
  {
    icon: CheckCircle,
    title: "Suporte ao time comercial",
    description:
      "Acompanhamento de atendimento para maximizar conversões, com treinamentos e scripts otimizados.",
  },
  {
    icon: RefreshCw,
    title: "Cultura de teste e melhoria",
    description:
      "Melhoria contínua e atualização com IA e mentorias para garantir que estamos sempre à frente da concorrência.",
  },
  {
    icon: Shield,
    title: "Zero reclamações públicas",
    description:
      "Alta taxa de renovação e contratos de longo prazo. Nossos clientes são nossos maiores defensores.",
  },
]
