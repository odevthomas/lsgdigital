"use client"

import { useState } from "react"
import {
  BarChart,
  Target,
  MessageCircle,
  Database,
  Globe,
  Paintbrush,
  Search,
  FileText,
  ChevronRight,
} from "lucide-react"
import { Button } from "../components/ui/button"
import { cn } from "@/lib/utils"

export function ServicesSection() {
  // Estado para controlar qual serviço está selecionado
  const [activeService, setActiveService] = useState("trafego")

  // Dados dos serviços
  const services = [
    {
      id: "trafego",
      title: "Gestão de Tráfego Pago",
      icon: <BarChart className="h-4 w-4" />,
      description: "Campanhas no Google Ads e Meta Ads com foco em ROAS e margem.",
      details: ["Segmentação avançada com funis completos", "Otimização com foco em resultados"],
    },
    {
      id: "campanhas",
      title: "Criação de Campanhas",
      icon: <Target className="h-4 w-4" />,
      description: "Funis estruturados (TOFU / MOFU / BOFU) com estratégia de conversão.",
      details: ["Copywriting e planejamento de mídia", "Mentoria em criativos"],
    },
    {
      id: "funis",
      title: "Funis de WhatsApp",
      icon: <MessageCircle className="h-4 w-4" />,
      description: "Jornadas de conversão via WhatsApp e sistemas de agendamento.",
      details: ["Bots e scripts de resposta rápida", "Assistentes para mensagens"],
    },
    {
      id: "crm",
      title: "Integração com CRM",
      icon: <Database className="h-4 w-4" />,
      description: "Setup completo do Kommo com automações comerciais.",
      details: ["Pipelines de vendas e inteligência comercial", "Treinamento do time de atendimento"],
    },
    {
      id: "sites",
      title: "Criação de Sites",
      icon: <Globe className="h-4 w-4" />,
      description: "Landing pages e sites institucionais focados em conversão.",
      details: ["SEO técnico e funil embutido", "Usabilidade e experiência do usuário"],
    },
    {
      id: "design",
      title: "Design Estratégico",
      icon: <Paintbrush className="h-4 w-4" />,
      description: "Artes para campanhas, redes sociais e identidade visual.",
      details: ["Branding para marcas e produtos", "Suporte visual para lançamentos"],
    },
    {
      id: "pesquisa",
      title: "Pesquisa de Mercado",
      icon: <Search className="h-4 w-4" />,
      description: "Análise de concorrência e mapeamento de demanda.",
      details: ["Validação de público-alvo", "Estratégia de posicionamento"],
    },
    {
      id: "relatorios",
      title: "Relatórios e Análises",
      icon: <FileText className="h-4 w-4" />,
      description: "Métricas e insights acionáveis para tomada de decisão.",
      details: ["Plano de ação baseado em dados", "Visualização de CAC, LTV e ROAS"],
    },
  ]

  // Encontrar o serviço ativo
  const currentService = services.find((service) => service.id === activeService) || services[0]

  return (
    <section id="servicos" className="w-full py-10 md:py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-2 text-center mb-8">
          <div className="space-y-1">
            <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-xs text-red-600 font-medium">
              Nossos Serviços
            </div>
            <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">O que a LSG Digital entrega</h2>
            <p className="max-w-[700px] text-gray-500 text-sm md:text-base">
              Serviços estratégicos e operacionais com foco em resultados
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 max-w-5xl mx-auto">
          {/* Menu lateral de serviços */}
          <div className="lg:w-1/3 flex flex-col">
            <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
              <div className="p-2 bg-red-50 border-b border-red-100">
                <h3 className="font-medium text-sm text-red-600">Serviços Estratégicos</h3>
              </div>
              <nav className="flex flex-col">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveService(service.id)}
                    className={cn(
                      "flex items-center gap-2 p-2 text-left text-sm transition-colors border-b border-gray-100 hover:bg-gray-50",
                      activeService === service.id ? "bg-red-50 text-red-600 font-medium" : "text-gray-700",
                    )}
                  >
                    <div
                      className={cn("rounded-full p-1.5", activeService === service.id ? "bg-red-100" : "bg-gray-100")}
                    >
                      {service.icon}
                    </div>
                    <span>{service.title}</span>
                    {activeService === service.id && <ChevronRight className="ml-auto h-4 w-4" />}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Área de conteúdo detalhado */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg border shadow-sm overflow-hidden h-full">
              <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-red-50 to-white">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-red-100 p-2">{currentService.icon}</div>
                  <h3 className="text-xl font-bold">{currentService.title}</h3>
                </div>
              </div>

              <div className="p-4">
                <p className="text-gray-700 text-sm mb-4">{currentService.description}</p>

                <h4 className="font-medium text-sm mb-2 text-gray-800">O que incluímos:</h4>
                <ul className="space-y-2 mb-4">
                  {currentService.details.map((detail, index) => (
                    <li key={index} className="flex items-start text-sm">
                      <div className="rounded-full bg-green-100 p-0.5 mr-2 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-600"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <span className="text-gray-600">{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex justify-end mt-4">
                  <Button size="sm" className="bg-red-600 hover:bg-red-700 text-xs" as="a" href="#contato">
                    Solicitar Proposta
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
