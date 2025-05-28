import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  MessageCircle,
  ArrowRight,
  TrendingUp,
  BarChart4,
  Layers,
  Zap,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react"
import type { Metadata } from "next"
import { MethodologySection } from "@/components/methodology-section"
import { ClientsSection } from "@/components/clients-section"
import { DifferentialsSection } from "@/components/differentials-section"
import { VideoTestimonialsSection } from "@/components/video-testimonials-section"
import { SEOFaq } from "@/components/seo-faq"

export const metadata: Metadata = {
  title: "LSG Digital | Engenharia de Crescimento com Tráfego Pago | ROI Real",
  description:
    "Aumente seu ROI com o Método PRISMA™. Somos especialistas em tráfego pago para empresas premium que buscam crescimento previsível e controle sobre resultados.",
  keywords:
    "tráfego pago, marketing digital, ROI, engenharia de crescimento, método PRISMA, diagnóstico estratégico, LSG Digital, agência de performance, Google Ads, Meta Ads, automação de marketing, Kommo CRM, agência de tráfego pago, marketing de performance",
  openGraph: {
    title: "LSG Digital | Engenharia de Crescimento com Tráfego Pago",
    description:
      "Redefinimos o marketing digital no Brasil com o Método PRISMA™. Aumente seu ROI com estratégias de tráfego pago que geram resultados mensuráveis e previsíveis.",
    url: "https://lsgdigital.com.br",
    siteName: "LSG Digital",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://lsgdigital.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LSG Digital - Engenharia de Crescimento com Tráfego Pago",
      },
    ],
  },
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Header com design corporativo */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Link href="/" aria-label="LSG Digital - Página Inicial" className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-1.5 rounded mr-1">
                <span className="text-white">LSG</span>
              </div>
              <span className="text-gray-800">Digital</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6" aria-label="Navegação principal">
            <Link href="#clientes" className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600">
              Clientes
            </Link>
            <Link
              href="#video-depoimentos"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
            >
              Depoimentos
            </Link>
            <Link
              href="#diferencial"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
            >
              Diferencial
            </Link>
            <Link
              href="#metodologia"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
            >
              Metodologia
            </Link>
            <Link
              href="#diferenciais"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600"
            >
              Por Que Escolher
            </Link>
            <Link href="#contato" className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600">
              Contato
            </Link>
          </nav>
          <Button className="hidden md:flex bg-blue-600 hover:bg-blue-700 border-0" as="a" href="#contato">
            Diagnóstico Gratuito
          </Button>
          <Button variant="outline" size="icon" className="md:hidden border-gray-300 text-gray-700" aria-label="Menu">
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section com design corporativo */}
        <section className="relative w-full py-16 md:py-24 lg:py-32 bg-gray-50 overflow-hidden">
          <div className="absolute inset-0 z-0">
            {/* Padrão de fundo sutil */}
            <div className="absolute inset-0 bg-[url('/subtle-pattern.png')] bg-repeat opacity-5"></div>

            {/* Formas geométricas sutis */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-bl-[100px] opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50 rounded-tr-[100px] opacity-70"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Coluna de texto */}
              <div className="flex flex-col space-y-8">
                <div className="inline-flex items-center self-start px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
                  <Zap className="h-4 w-4 mr-2 text-blue-600" />
                  Engenharia de Crescimento com Tráfego Pago
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-gray-900">
                  <span className="block mb-2">
                    Seu <span className="text-blue-600">TRÁFEGO PAGO</span>
                  </span>
                  <span className="block mb-2">
                    não deveria ser um <span className="text-blue-600">CUSTO</span>.
                  </span>
                  <span className="block mb-2">
                    Deveria ser o <span className="text-blue-600">MOTOR</span>
                  </span>
                  <span className="block">
                    das <span className="text-blue-600">SUAS VENDAS</span>.
                  </span>
                </h1>

                <p className="text-xl text-gray-600 max-w-xl">
                  Não operamos campanhas. Construímos sistemas de crescimento. Com método, leitura de negócio e foco
                  total no seu ROI, criamos a engrenagem que transforma cliques em vendas.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-lg font-medium h-12 px-6 rounded-md group"
                    as="a"
                    href="#contato"
                  >
                    DIAGNÓSTICO GRATUITO
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-200 text-blue-600 hover:bg-blue-50 text-lg font-medium h-12 px-6 rounded-md"
                    as="a"
                    href="#video-depoimentos"
                  >
                    VER DEPOIMENTOS
                  </Button>
                </div>
              </div>

              {/* Coluna de imagem/ilustração */}
              <div className="relative">
                <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/dashboard-analytics.png"
                    alt="Dashboard de análise de performance de marketing digital"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Cards de métricas flutuantes */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 border border-gray-100 w-48">
                  <div className="flex items-center mb-2">
                    <div className="bg-blue-100 p-2 rounded-md mr-3">
                      <BarChart4 className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="text-gray-800 font-bold">ROAS Médio</div>
                  </div>
                  <div className="text-3xl font-bold text-blue-600">26x</div>
                  <div className="flex items-center mt-1 text-green-600 text-sm">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    <span>+12% este ano</span>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 border border-gray-100 w-48">
                  <div className="flex items-center mb-2">
                    <div className="bg-blue-100 p-2 rounded-md mr-3">
                      <Layers className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="text-gray-800 font-bold">Vendas</div>
                  </div>
                  <div className="text-3xl font-bold text-blue-600">+3.6M</div>
                  <div className="flex items-center mt-1 text-green-600 text-sm">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    <span>+800K último trimestre</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção "Como Trabalhamos" - Estilo corporativo */}
        <section className="w-full py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-4">
                Nossa Abordagem
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900">
                Como <span className="text-blue-600">Transformamos</span> Seu Tráfego
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl">
                Nossa metodologia proprietária transforma seu investimento em mídia em um sistema previsível de
                crescimento
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 */}
              <div className="group relative bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
                <div className="p-8">
                  <div className="bg-blue-100 p-3 rounded-lg inline-flex mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-blue-600"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Diagnóstico Estratégico</h3>
                  <p className="text-gray-600 mb-6">
                    Análise profunda do seu negócio, mercado e concorrência para identificar oportunidades únicas de
                    crescimento.
                  </p>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                    <span className="text-sm font-medium">Saiba mais</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
                <div className="p-8">
                  <div className="bg-blue-100 p-3 rounded-lg inline-flex mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-blue-600"
                    >
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Desenho de Funil</h3>
                  <p className="text-gray-600 mb-6">
                    Criação de funis de conversão personalizados com foco em intenção comercial e jornada do cliente.
                  </p>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                    <span className="text-sm font-medium">Saiba mais</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
                <div className="p-8">
                  <div className="bg-blue-100 p-3 rounded-lg inline-flex mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-blue-600"
                    >
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Otimização Contínua</h3>
                  <p className="text-gray-600 mb-6">
                    Monitoramento diário e ajustes estratégicos para maximizar o ROI e escalar resultados de forma
                    sustentável.
                  </p>
                  <div className="flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                    <span className="text-sm font-medium">Saiba mais</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Números e Resultados */}
        <section className="w-full py-16 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Resultados que Falam por Si</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Nossos números refletem nosso compromisso com o crescimento sustentável dos nossos clientes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-5xl font-bold mb-2">26x</div>
                <div className="text-xl font-medium mb-1">ROAS Médio</div>
                <p className="text-blue-100 text-sm">Retorno sobre investimento em anúncios</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-5xl font-bold mb-2">+3.6M</div>
                <div className="text-xl font-medium mb-1">Vendas Geradas</div>
                <p className="text-blue-100 text-sm">Em vendas diretas para nossos clientes</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-5xl font-bold mb-2">+27</div>
                <div className="text-xl font-medium mb-1">Clientes Ativos</div>
                <p className="text-blue-100 text-sm">Empresas que confiam em nossa metodologia</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-xl font-medium mb-1">Retenção</div>
                <p className="text-blue-100 text-sm">Taxa de renovação de contratos</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Página Grandes Marcas Confiam */}
        <ClientsSection />

        {/* 3. Página Que Nossos Clientes Têm a Dizer */}
        <VideoTestimonialsSection />

        {/* 4. Página Tráfego Pago Não É Mídia */}
        <section id="diferencial" className="w-full py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-4xl mx-auto">
              <div className="space-y-2 mb-8">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
                  Nosso Diferencial
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mt-2 text-gray-900">
                  TRÁFEGO NÃO É MÍDIA. <span className="text-blue-600">É ENGENHARIA DE CRESCIMENTO.</span>
                </h2>
                <p className="text-xl text-gray-600 mt-4">
                  Rejeitamos o modelo padrão de agências que tratam tráfego como commodity
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 w-full mt-8">
                <div className="flex flex-col space-y-4 rounded-lg border border-red-200 p-8 bg-white shadow-sm">
                  <h3 className="text-2xl font-bold text-red-600 mb-4">O que NÃO somos:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-red-500 mr-3 shrink-0"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                      <span className="text-lg text-gray-700">Agência que trata tráfego como commodity</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-red-500 mr-3 shrink-0"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                      <span className="text-lg text-gray-700">Vendedores de pacotes padronizados</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-red-500 mr-3 shrink-0"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                      <span className="text-lg text-gray-700">Focados em métricas de vaidade</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-red-500 mr-3 shrink-0"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                      <span className="text-lg text-gray-700">Atendimento terceirizado e raso</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-red-500 mr-3 shrink-0"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                      <span className="text-lg text-gray-700">Promessas genéricas sem diagnóstico</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col space-y-4 rounded-lg border border-green-200 p-8 bg-white shadow-sm">
                  <h3 className="text-2xl font-bold text-green-600 mb-4">O que SOMOS:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                      <span className="text-lg text-gray-700">Engenheiros de crescimento com foco em ROI</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                      <span className="text-lg text-gray-700">Estrategistas que entendem seu negócio a fundo</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                      <span className="text-lg text-gray-700">Especialistas em diagnóstico antes da execução</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                      <span className="text-lg text-gray-700">Atendimento técnico e humano sem terceirização</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                      <span className="text-lg text-gray-700">Focados em métricas que realmente importam</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Página Método PRISMA */}
        <MethodologySection />

        {/* 6. Página Por Que Escolher a LSG Digital */}
        <DifferentialsSection />

        {/* FAQ Section for SEO */}
        <SEOFaq />

        {/* CTA Banner */}
        <section className="w-full py-12 bg-gray-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold mb-4">Pronto para transformar seu marketing digital?</h2>
                <p className="text-xl text-gray-300">
                  Agende uma conversa com nossos especialistas e descubra como podemos ajudar seu negócio a crescer.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-lg font-medium h-12 px-6 rounded-md"
                  as="a"
                  href="#contato"
                >
                  FALAR COM ESPECIALISTA
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 text-lg font-medium h-12 px-6 rounded-md"
                  as="a"
                  href="#cases"
                >
                  VER CASES
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Página Final - Contato */}
        <section id="contato" className="w-full py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center max-w-5xl mx-auto">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-2">
                    Diagnóstico Gratuito
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
                    Pronto para transformar tráfego em centro de lucro?
                  </h2>
                  <p className="text-xl text-gray-600">
                    Solicite um diagnóstico estratégico gratuito e descubra como podemos ajudar seu negócio a crescer
                    com previsibilidade e controle.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="text-lg text-gray-700">Diagnóstico personalizado do seu negócio</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="text-lg text-gray-700">Estratégias sob medida para seu mercado</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="text-lg text-gray-700">Resultados mensuráveis e transparentes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="text-lg text-gray-700">Foco total em ROI e crescimento sustentável</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-4 rounded-lg border border-gray-200 p-8 bg-white shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900">Solicite seu Diagnóstico Gratuito</h3>
                <form
                  className="grid gap-5"
                  name="contato"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="contato" />
                  <div className="hidden">
                    <label>
                      Não preencha isso se você for humano: <input name="bot-field" />
                    </label>
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium leading-none text-gray-700" htmlFor="name">
                      Nome
                    </label>
                    <input
                      className="flex h-12 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400"
                      id="name"
                      name="name"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium leading-none text-gray-700" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="flex h-12 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400"
                      id="email"
                      name="email"
                      placeholder="seu@email.com"
                      type="email"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium leading-none text-gray-700" htmlFor="phone">
                      Telefone
                    </label>
                    <input
                      className="flex h-12 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400"
                      id="phone"
                      name="phone"
                      placeholder="(00) 00000-0000"
                      type="tel"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium leading-none text-gray-700" htmlFor="business">
                      Segmento do Negócio
                    </label>
                    <select
                      className="flex h-12 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900"
                      id="business"
                      name="business"
                      required
                    >
                      <option value="">Selecione um segmento</option>
                      <option value="servicos-premium">Serviços Premium</option>
                      <option value="educacao">Educação Privada</option>
                      <option value="resorts-clinicas">Resorts e Clínicas</option>
                      <option value="tecnologia">Tecnologia</option>
                      <option value="beleza-moda">Beleza e Moda</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium leading-none text-gray-700" htmlFor="investment">
                      Investimento Mensal em Mídia
                    </label>
                    <select
                      className="flex h-12 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900"
                      id="investment"
                      name="investment"
                      required
                    >
                      <option value="">Selecione um valor</option>
                      <option value="ate-5k">Até R$ 5.000</option>
                      <option value="5k-15k">R$ 5.000 a R$ 15.000</option>
                      <option value="15k-30k">R$ 15.000 a R$ 30.000</option>
                      <option value="30k-50k">R$ 30.000 a R$ 50.000</option>
                      <option value="acima-50k">Acima de R$ 50.000</option>
                    </select>
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-medium leading-none text-gray-700" htmlFor="message">
                      Desafio Principal
                    </label>
                    <textarea
                      className="flex min-h-[120px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400"
                      id="message"
                      name="message"
                      placeholder="Qual o principal desafio do seu negócio hoje?"
                      required
                    />
                  </div>
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-lg font-medium h-12 rounded-md"
                    type="submit"
                  >
                    QUERO MAIS INFORMAÇÕES
                  </Button>
                </form>
                <div className="text-center text-sm text-gray-600 mt-4">
                  <p>Ou fale diretamente conosco:</p>
                  <a
                    href="https://wa.me/seunumero"
                    className="inline-flex items-center justify-center text-blue-600 hover:text-blue-700 mt-2"
                  >
                    <MessageCircle className="h-4 w-4 mr-1" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-gray-200 bg-gray-50 py-12 text-gray-700">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-2xl">
                <div className="bg-blue-600 p-1.5 rounded mr-1">
                  <span className="text-white">LSG</span>
                </div>
                <span className="text-gray-900">Digital</span>
              </div>
              <p className="text-gray-600">Redefinindo o que significa crescer com marketing no Brasil desde 2015.</p>
              <div className="flex items-center gap-4">
                <Link href="#" className="text-gray-500 hover:text-blue-600" aria-label="Facebook">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-blue-600" aria-label="Instagram">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-gray-500 hover:text-blue-600" aria-label="LinkedIn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900">Navegação Rápida</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#clientes" className="text-gray-600 hover:text-blue-600">
                    Nossos Clientes
                  </Link>
                </li>
                <li>
                  <Link href="#video-depoimentos" className="text-gray-600 hover:text-blue-600">
                    Depoimentos em Vídeo
                  </Link>
                </li>
                <li>
                  <Link href="#metodologia" className="text-gray-600 hover:text-blue-600">
                    Método PRISMA™
                  </Link>
                </li>
                <li>
                  <Link href="#diferenciais" className="text-gray-600 hover:text-blue-600">
                    Por Que Escolher
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900">Serviços</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Gestão de Tráfego Pago
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Criação de Campanhas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Funis de WhatsApp
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-blue-600">
                    Integração com CRM
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-blue-600"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="text-gray-600">(00) 0000-0000</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-blue-600"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span className="text-gray-600">contato@lsgdigital.com.br</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-blue-600"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-gray-600">São Paulo, SP - Brasil</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-gray-200 pt-8">
            <p className="text-center text-sm leading-loose text-gray-600">
              © {new Date().getFullYear()} LSG Digital. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
