import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import type { Metadata } from "next"
import { WhatsAppButton } from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LSG Digital | Engenharia de Crescimento com Tráfego Pago | ROI Real",
  description:
    "Aumente seu ROI com o Método PRISMA™. Somos especialistas em tráfego pago para empresas premium que buscam crescimento previsível e controle sobre resultados.",
  keywords:
    "tráfego pago, marketing digital, ROI, engenharia de crescimento, método PRISMA, diagnóstico estratégico, LSG Digital, agência de performance, Google Ads, Meta Ads, automação de marketing, Kommo CRM, agência de tráfego pago, marketing de performance",
  metadataBase: new URL("https://lsgdigital.com.br"),
  alternates: {
    canonical: "/",
  },
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
  twitter: {
    card: "summary_large_image",
    title: "LSG Digital | Engenharia de Crescimento com Tráfego Pago",
    description:
      "Redefinimos o marketing digital no Brasil com o Método PRISMA™. Aumente seu ROI com estratégias de tráfego pago.",
    images: ["https://lsgdigital.com.br/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  generator: "LSG Digital",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="theme-color" content="#e11d48" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <WhatsAppButton />
        </ThemeProvider>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>
        {/* Structured Data - Organization */}
        <Script
          id="structured-data-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "LSG Digital",
              url: "https://lsgdigital.com.br",
              logo: "https://lsgdigital.com.br/logo.png",
              description:
                "Redefinimos o que significa crescer com marketing no Brasil. Tráfego pago com controle, previsibilidade e excelência técnica. Método PRISMA™ exclusivo.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "São Paulo",
                addressRegion: "SP",
                addressCountry: "BR",
              },
              telephone: "+55-00-00000000",
              email: "contato@lsgdigital.com.br",
              sameAs: [
                "https://www.facebook.com/lsgdigital",
                "https://www.instagram.com/lsgdigital",
                "https://www.linkedin.com/company/lsgdigital",
              ],
              openingHours: "Mo,Tu,We,Th,Fr 09:00-18:00",
            }),
          }}
        />
        {/* Structured Data - LocalBusiness */}
        <Script
          id="structured-data-localbusiness"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "LSG Digital",
              image: "https://lsgdigital.com.br/logo.png",
              url: "https://lsgdigital.com.br",
              telephone: "+55-00-00000000",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Endereço da LSG Digital",
                addressLocality: "São Paulo",
                addressRegion: "SP",
                postalCode: "00000-000",
                addressCountry: "BR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -23.5505,
                longitude: -46.6333,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
              },
              priceRange: "$$",
            }),
          }}
        />
        {/* Structured Data - Service */}
        <Script
          id="structured-data-service"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Marketing Digital",
              provider: {
                "@type": "Organization",
                name: "LSG Digital",
                url: "https://lsgdigital.com.br",
              },
              description: "Engenharia de crescimento com tráfego pago. Método PRISMA™ exclusivo para maximizar ROI.",
              areaServed: {
                "@type": "Country",
                name: "Brasil",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Serviços de Marketing Digital",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Tráfego Pago",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Automação de Marketing",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Diagnóstico Estratégico",
                    },
                  },
                ],
              },
            }),
          }}
        />
        {/* Structured Data - FAQ */}
        <Script
          id="structured-data-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "O que é o Método PRISMA™?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "O Método PRISMA™ é nossa metodologia proprietária em 7 etapas que inclui diagnóstico estratégico profundo, desenho de funil com intenção comercial, setup técnico, campanhas com foco em ROI, otimização diária, relatórios executivos e escalonamento validado.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quanto tempo leva para ver resultados?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Os primeiros resultados começam a aparecer entre 30 a 60 dias, dependendo do seu mercado e da maturidade digital do seu negócio. Nosso foco é em resultados sustentáveis e escaláveis, não em picos temporários de performance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quais mercados a LSG Digital atende?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Atendemos principalmente serviços premium com marca pessoal, educação privada, resorts e clínicas com ticket alto, tecnologia sob demanda e beleza e moda com posicionamento forte. O que define nosso cliente ideal é visão de crescimento e compromisso com estrutura.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Como a LSG Digital se diferencia de outras agências de marketing?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Diferente de agências tradicionais, não tratamos tráfego como commodity. Somos engenheiros de crescimento com foco em ROI, realizamos diagnóstico profundo antes de qualquer execução, e oferecemos atendimento técnico sem terceirização. Nossa abordagem é personalizada para cada cliente, com foco em métricas que realmente impactam o negócio.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Qual é o investimento mínimo para trabalhar com a LSG Digital?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "O investimento varia conforme as necessidades específicas do seu negócio e objetivos de crescimento. Trabalhamos com empresas que valorizam resultados de longo prazo e entendem marketing como investimento estratégico. Para receber uma proposta personalizada, entre em contato conosco para um diagnóstico gratuito.",
                  },
                },
              ],
            }),
          }}
        />
        {/* Structured Data - BreadcrumbList */}
        <Script
          id="structured-data-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://lsgdigital.com.br",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Metodologia",
                  item: "https://lsgdigital.com.br/#metodologia",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Depoimentos",
                  item: "https://lsgdigital.com.br/#video-depoimentos",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Contato",
                  item: "https://lsgdigital.com.br/#contato",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
