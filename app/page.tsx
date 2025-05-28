import Link from "next/link";
import Image from "next/image";
import { Button } from "../components/ui/button";
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
} from "lucide-react";
import type { Metadata } from "next";
import { Header } from "../components/layout/header";
import { ClientsSection } from "../components/clients-section";
import { VideoTestimonialsSection } from "../components/video-testimonials-section";
import { MethodologySection } from "../components/methodology-section";
import { DifferentialsSection } from "../components/differentials-section";
import { SEOFaq } from "../components/seo-faq";
import { ContatoForm } from "../components/contato-form";
// import { enviarMensagem } from "../actions/enviarMensagem";

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
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Update sections with proper IDs */}
        <section id="hero" className="relative w-full py-16 md:py-24 lg:py-32 bg-gray-50 overflow-hidden">
          {/* Plano de fundo com padrão e formas */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/subtle-pattern.png')] bg-repeat opacity-5"></div>
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-50 rounded-bl-[100px] opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-red-50 rounded-tr-[100px] opacity-70"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Coluna de texto */}

              <div className="flex flex-col items-start text-left space-y-4 max-w-xl mx-auto sm:mx-0">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-700 text-sm font-medium">
                  <Zap className="h-4 w-4 mr-2 text-red-600" />
                  Engenharia de Crescimento com Tráfego Pago
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
                  Seu <span className="text-red-600">TRÁFEGO PAGO</span> não
                  deveria ser um <span className="text-red-600">CUSTO</span>.
                  Deveria ser o <span className="text-red-600">MOTOR</span> das{" "}
                  <span className="text-red-600">SUAS VENDAS</span>.
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-full">
                  Não operamos campanhas. Construímos sistemas de crescimento.
                  Com método, leitura de negócio e foco total no seu ROI,
                  criamos a engrenagem que transforma cliques em vendas.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-start w-full">
                  <Button
                    href="#contato"
                    size="lg"
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium h-12 px-6 rounded-md transition"
                  >
                    Solicitar Diagnóstico Gratuito
                    <ArrowRight className="h-4 w-4" />
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="border-red-200 text-red-600 hover:bg-red-50 text-lg font-medium h-12 px-6 rounded-md"
                    as="a"
                    href="#video-depoimentos" // Corrigido aqui
                  >
                    VER DEPOIMENTOS
                  </Button>
                </div>

                <Link
                  href="#saiba-mais"
                  className="group inline-flex items-center gap-1 text-red-600 hover:text-red-700"
                >
                  Saiba mais
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Coluna do gráfico animado */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md md:max-w-lg h-[400px] rounded-lg overflow-visible shadow-xl p-6 bg-white border border-gray-100">
                  {/* SVG gráfico animado simples */}
                  <svg
                    viewBox="0 0 300 200"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                    aria-label="Gráfico de barras animado"
                    role="img"
                  >
                    <rect x="20" y="150" width="40" height="0" fill="#ec5240">
                      <animate
                        attributeName="height"
                        from="0"
                        to="100"
                        begin="0s"
                        dur="1.5s"
                        fill="freeze"
                      />
                      <animate
                        attributeName="y"
                        from="150"
                        to="50"
                        begin="0s"
                        dur="1.5s"
                        fill="freeze"
                      />
                    </rect>
                    <rect x="80" y="150" width="40" height="0" fill="#ed2f1a">
                      <animate
                        attributeName="height"
                        from="0"
                        to="140"
                        begin="0.3s"
                        dur="1.5s"
                        fill="freeze"
                      />
                      <animate
                        attributeName="y"
                        from="150"
                        to="10"
                        begin="0.3s"
                        dur="1.5s"
                        fill="freeze"
                      />
                    </rect>
                    <rect x="140" y="150" width="40" height="0" fill="#fc7f71">
                      <animate
                        attributeName="height"
                        from="0"
                        to="90"
                        begin="0.6s"
                        dur="1.5s"
                        fill="freeze"
                      />
                      <animate
                        attributeName="y"
                        from="150"
                        to="60"
                        begin="0.6s"
                        dur="1.5s"
                        fill="freeze"
                      />
                    </rect>
                    <rect x="200" y="150" width="40" height="0" fill="#ff5744">
                      <animate
                        attributeName="height"
                        from="0"
                        to="120"
                        begin="0.9s"
                        dur="1.5s"
                        fill="freeze"
                      />
                      <animate
                        attributeName="y"
                        from="150"
                        to="30"
                        begin="0.9s"
                        dur="1.5s"
                        fill="freeze"
                      />
                    </rect>
                    <rect x="260" y="150" width="40" height="0" fill="#cc2c1a">
                      <animate
                        attributeName="height"
                        from="0"
                        to="70"
                        begin="1.2s"
                        dur="1.5s"
                        fill="freeze"
                      />
                      <animate
                        attributeName="y"
                        from="150"
                        to="80"
                        begin="1.2s"
                        dur="1.5s"
                        fill="freeze"
                      />
                    </rect>
                  </svg>
                </div>

                {/* Métricas flutuantes */}
                <div className="absolute -bottom-6 left-0 sm:left-[-20px] bg-white rounded-lg shadow-lg p-4 border border-gray-100 w-44 sm:w-48">
                  <div className="flex items-center mb-2">
                    <div className="bg-red-100 p-2 rounded-md mr-3">
                      <BarChart4 className="h-5 w-5 text-red-600" />
                    </div>
                    <div className="text-gray-800 font-bold text-sm sm:text-base">
                      ROAS Médio
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-red-600">
                    26x
                  </div>
                  <div className="flex items-center mt-1 text-green-600 text-sm">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    <span>+12% este ano</span>
                  </div>
                </div>

                <div className="absolute -top-6 right-0 sm:right-[-20px] bg-white rounded-lg shadow-lg p-4 border border-gray-100 w-44 sm:w-48">
                  <div className="flex items-center mb-2">
                    <div className="bg-red-100 p-2 rounded-md mr-3">
                      <Layers className="h-5 w-5 text-red-600" />
                    </div>
                    <div className="text-gray-800 font-bold text-sm sm:text-base">
                      Vendas
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-red-600">
                    +3.6M
                  </div>
                  <div className="flex items-center mt-1 text-green-600 text-sm">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    <span>+800 último trimestre</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="clientes">
          <ClientsSection />
        </section>

        <section id="video-depoimentos">
          <VideoTestimonialsSection />
        </section>

        <section id="diferencial">
          <DifferentialsSection />
        </section>

        <section id="metodologia">
          <MethodologySection />
        </section>

        <section id="por-que-escolher">
          {/* 6. Página Por Que Escolher a LSG Digital */}
        </section>

        <section id="contato" className="w-full py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center max-w-5xl mx-auto">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-700 text-sm font-medium mb-2">
                    Diagnóstico Gratuito
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-900">
                    Pronto para transformar tráfego em centro de lucro?
                  </h2>
                  <p className="text-xl text-gray-600">
                    Solicite um diagnóstico estratégico gratuito e descubra como
                    podemos ajudar seu negócio a crescer com previsibilidade e
                    controle.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="text-lg text-gray-700">
                      Diagnóstico personalizado do seu negócio
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="text-lg text-gray-700">
                      Estratégias sob medida para seu mercado
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="text-lg text-gray-700">
                      Resultados mensuráveis e transparentes
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="text-lg text-gray-700">
                      Foco total em ROI e crescimento sustentável
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-4 rounded-lg border border-gray-200 p-8 bg-white shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900">
                  Solicite seu Diagnóstico Gratuito
                </h3>
                <ContatoForm />
                <div className="text-center text-sm text-gray-600 mt-4">
                  <p>Ou fale diretamente conosco:</p>
                  <a
                    href="https://wa.me/5519981331191"
                    className="inline-flex items-center justify-center text-red-600 hover:text-red-700 mt-2 cursor-pointer"
                    aria-label="Fale conosco pelo WhatsApp"
                  >
                    <MessageCircle className="h-4 w-4 mr-1" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Update footer contact information */}
        <footer className="w-full border-t border-gray-200 bg-gray-50 py-12 text-gray-700">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-bold text-2xl">
                  <Image
                    src="/lsglogo-removebg-preview.png"
                    alt="LSG Digital Logo"
                    width={200}
                    height={200}
                    className="rounded"
                  />
                </div>
                <p className="text-gray-600">
                  Redefinindo o que significa crescer com marketing no Brasil desde 2015.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900">Navegação</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="#clientes" className="text-gray-600 hover:text-red-600">
                      Nossos Clientes
                    </Link>
                  </li>
                  <li>
                    <Link href="#video-depoimentos" className="text-gray-600 hover:text-red-600">
                      Depoimentos
                    </Link>
                  </li>
                  <li>
                    <Link href="#metodologia" className="text-gray-600 hover:text-red-600">
                      Método PRISMA™
                    </Link>
                  </li>
                  <li>
                    <Link href="#contato" className="text-gray-600 hover:text-red-600">
                      Contato
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
                      className="h-5 w-5 text-red-600"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span className="text-gray-600">+55 19 98133-1191</span>
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
                      className="h-5 w-5 text-red-600"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <span className="text-gray-600">comercial@lsgdigital.com.br</span>
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
                      className="h-5 w-5 text-red-600"
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
      </main>
    </div>
  );
}
