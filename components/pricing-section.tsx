"use client"

import { CheckCircle } from "lucide-react"
import { Button } from "../components/ui/button"

export function PricingSection() {
  return (
    <section id="planos" className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 font-medium">
              Planos Disponíveis
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Escolha o Plano Ideal para seu Negócio</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Todos os planos incluem acompanhamento estratégico, suporte via WhatsApp e relatórios semanais com análise
              crítica de performance
            </p>
          </div>
          <div className="mx-auto grid gap-6 md:gap-8 mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-full md:max-w-6xl">
            {/* Plano Estrutura */}
            <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Plano Estrutura</h3>
                <p className="text-gray-500">Ideal para quem está construindo sua base de tráfego</p>
              </div>
              <div className="mt-6 space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Gestão Google e Meta Ads</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Criação de campanhas por funil (TOFU / MOFU / BOFU)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Suporte na criação de criativos e copies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Acompanhamento quinzenal com estrategista</span>
                  </li>
                </ul>
              </div>
              <div className="mt-auto pt-6">
                <Button className="w-full bg-red-600 hover:bg-red-700" as="a" href="#contato">
                  Solicitar Proposta
                </Button>
              </div>
            </div>

            {/* Plano Performance */}
            <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm relative">
              <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                MAIS POPULAR
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Plano Performance</h3>
                <p className="text-gray-500">Para operações em crescimento e funis com retorno claro</p>
              </div>
              <div className="mt-6 space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Tudo do Plano Estrutura</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>CRM + Automações via Kommo (ou integração própria)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Suporte ao time comercial com diagnóstico de atendimento</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Sessões estratégicas mensais</span>
                  </li>
                </ul>
              </div>
              <div className="mt-auto pt-6">
                <Button className="w-full bg-red-600 hover:bg-red-700" as="a" href="#contato">
                  Solicitar Proposta
                </Button>
              </div>
            </div>

            {/* Plano Escala */}
            <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Plano Escala</h3>
                <p className="text-gray-500">Para marcas que buscam previsibilidade e crescimento validado</p>
              </div>
              <div className="mt-6 space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Tudo do Plano Performance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Funis múltiplos por segmento ou produto</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Múltiplas campanhas com segmentações paralelas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Testes A/B com criativos, audiências e canais</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Otimização diária com plano de escala realista</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500 mt-2">
                  Prazo mínimo: 4 meses de contrato com revisão completa no 3º mês
                </p>
              </div>
              <div className="mt-auto pt-6">
                <Button className="w-full bg-red-600 hover:bg-red-700" as="a" href="#contato">
                  Solicitar Proposta
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
