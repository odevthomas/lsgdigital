import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import type { Metadata } from "next/types"
import { WhatsAppWrapper } from "@/components/WhatsAppWrapper" // novo wrapper

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
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE", // Substitua pelo real
  },
  generator: "LSG Digital",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/lsglogo.jpeg" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="theme-color" content="#e11d48" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} bg-gray-50`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="px-4 sm:px-6 md:px-8 lg:px-16">
            {children}
          </div>
          <WhatsAppWrapper />
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
              logo: "https://lsgdigital.com.br/lsglogo.jpeg",
              description:
                "Redefinimos o que significa crescer com marketing no Brasil. Tráfego pago com controle, previsibilidade e excelência técnica. Método PRISMA™ exclusivo.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "São Paulo",
                addressRegion: "SP",
                addressCountry: "BR",
              },
              telephone: "+55 19 98133-1191",
              email: "comercial@lsgdigital.com.br",
              sameAs: [
                "https://www.facebook.com/lsgdigital",
                "https://www.instagram.com/lsgdigital",
                "https://www.linkedin.com/company/lsgdigital",
              ],
              openingHours: "Mo,Tu,We,Th,Fr 09:00-18:00",
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
                    text: "O Método PRISMA™ é nossa metodologia proprietária em 7 etapas, que combina análise de dados, criação de criativos, otimização de funil e automação para maximizar seu ROI.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Quanto tempo leva para ver resultados?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Os primeiros resultados começam a aparecer entre 30 a 60 dias, dependendo do mercado e investimento em mídia.",
                  },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
