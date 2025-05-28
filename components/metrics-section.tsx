"use client"

import { useState } from "react"
import { BarChart3, TrendingUp, DollarSign, Target, Users, Clock, PieChart, BarChart2 } from "lucide-react"

export function MetricsSection() {
  const [activeTab, setActiveTab] = useState("principais")

  return (
    <section
      id="metricas"
      className="w-full py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-block rounded-lg bg-red-600/20 px-3 py-1 text-sm text-red-400 font-medium">
              Métricas que Definem Sucesso
            </div>
            <h2 className="text-4xl font-bold tracking-tighter md:text-5xl">
              Além das <span className="text-red-500">Métricas de Vaidade</span>
            </h2>
            <p className="text-gray-300 md:text-xl/relaxed">
              Focamos em indicadores que realmente impactam o crescimento e o lucro do seu negócio, não apenas em
              números que parecem bons em relatórios.
            </p>
          </div>

          {/* Tabs de navegação */}
          <div className="flex flex-wrap justify-center gap-2 border-b border-gray-700 w-full max-w-3xl">
            <button
              onClick={() => setActiveTab("principais")}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === "principais" ? "text-red-500 border-b-2 border-red-500" : "text-gray-400 hover:text-white"
              }`}
            >
              Métricas Principais
            </button>
            <button
              onClick={() => setActiveTab("secundarias")}
              className={`px-4 py-2 font-medium transition-colors ${
                activeTab === "secundarias"
                  ? "text-red-500 border-b-2 border-red-500"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Métricas Avançadas
            </button>
          </div>

          {/* Conteúdo das métricas principais */}
          {activeTab === "principais" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mt-8">
              {/* ROAS */}
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 p-6 shadow-lg transition-transform hover:scale-105">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-16 w-16 rounded-full bg-red-500/20 transition-transform group-hover:scale-150"></div>
                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="rounded-lg bg-red-500/10 p-2">
                      <BarChart3 className="h-6 w-6 text-red-500" />
                    </div>
                    <span className="text-xs font-medium text-gray-400">Métrica #1</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">ROAS</h3>
                  <div className="h-1 w-16 bg-red-500 rounded-full mb-4"></div>
                  <p className="text-gray-300">Retorno sobre investimento em anúncios por canal, criativo e funil</p>
                  <div className="mt-4 flex items-center text-sm text-red-400">
                    <TrendingUp className="mr-1 h-4 w-4" />
                    <span>26x média em contas gerenciadas</span>
                  </div>
                </div>
              </div>

              {/* CPL-Q */}
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 p-6 shadow-lg transition-transform hover:scale-105">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-16 w-16 rounded-full bg-red-500/20 transition-transform group-hover:scale-150"></div>
                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="rounded-lg bg-red-500/10 p-2">
                      <Target className="h-6 w-6 text-red-500" />
                    </div>
                    <span className="text-xs font-medium text-gray-400">Métrica #2</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">CPL-Q</h3>
                  <div className="h-1 w-16 bg-red-500 rounded-full mb-4"></div>
                  <p className="text-gray-300">Custo por Lead Qualificado, não apenas volume de contatos</p>
                  <div className="mt-4 flex items-center text-sm text-red-400">
                    <TrendingUp className="mr-1 h-4 w-4" />
                    <span>Redução média de 42% em 60 dias</span>
                  </div>
                </div>
              </div>

              {/* CAC x LTV */}
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 p-6 shadow-lg transition-transform hover:scale-105">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-16 w-16 rounded-full bg-red-500/20 transition-transform group-hover:scale-150"></div>
                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="rounded-lg bg-red-500/10 p-2">
                      <DollarSign className="h-6 w-6 text-red-500" />
                    </div>
                    <span className="text-xs font-medium text-gray-400">Métrica #3</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">CAC x LTV</h3>
                  <div className="h-1 w-16 bg-red-500 rounded-full mb-4"></div>
                  <p className="text-gray-300">Relação entre custo de aquisição e valor do cliente ao longo do tempo</p>
                  <div className="mt-4 flex items-center text-sm text-red-400">
                    <TrendingUp className="mr-1 h-4 w-4" />
                    <span>Otimização contínua da relação</span>
                  </div>
                </div>
              </div>

              {/* CPA */}
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 p-6 shadow-lg transition-transform hover:scale-105">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-16 w-16 rounded-full bg-red-500/20 transition-transform group-hover:scale-150"></div>
                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="rounded-lg bg-red-500/10 p-2">
                      <Users className="h-6 w-6 text-red-500" />
                    </div>
                    <span className="text-xs font-medium text-gray-400">Métrica #4</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">CPA</h3>
                  <div className="h-1 w-16 bg-red-500 rounded-full mb-4"></div>
                  <p className="text-gray-300">Custo por ação final (agendamento, proposta, venda)</p>
                  <div className="mt-4 flex items-center text-sm text-red-400">
                    <TrendingUp className="mr-1 h-4 w-4" />
                    <span>Foco em ações de alto valor</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Conteúdo das métricas secundárias */}
          {activeTab === "secundarias" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mt-8">
              {/* Conversão por Etapa */}
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 p-6 shadow-lg transition-transform hover:scale-105">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-16 w-16 rounded-full bg-red-500/20 transition-transform group-hover:scale-150"></div>
                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="rounded-lg bg-red-500/10 p-2">
                      <PieChart className="h-6 w-6 text-red-500" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Conversão por Etapa</h3>
                  <div className="h-1 w-16 bg-red-500 rounded-full mb-4"></div>
                  <p className="text-gray-300">Taxa de conversão em cada etapa do funil para identificar gargalos</p>
                </div>
              </div>

              {/* Frequência x Saturação */}
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 p-6 shadow-lg transition-transform hover:scale-105">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-16 w-16 rounded-full bg-red-500/20 transition-transform group-hover:scale-150"></div>
                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="rounded-lg bg-red-500/10 p-2">
                      <BarChart2 className="h-6 w-6 text-red-500" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Frequência x Saturação</h3>
                  <div className="h-1 w-16 bg-red-500 rounded-full mb-4"></div>
                  <p className="text-gray-300">Equilíbrio entre frequência de exibição e saturação criativa</p>
                </div>
              </div>

              {/* Tempo de Resposta */}
              <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 p-6 shadow-lg transition-transform hover:scale-105">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 h-16 w-16 rounded-full bg-red-500/20 transition-transform group-hover:scale-150"></div>
                <div className="relative z-10">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="rounded-lg bg-red-500/10 p-2">
                      <Clock className="h-6 w-6 text-red-500" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Tempo de Resposta</h3>
                  <div className="h-1 w-16 bg-red-500 rounded-full mb-4"></div>
                  <p className="text-gray-300">Correlação entre tempo de resposta e taxa de conversão</p>
                </div>
              </div>
            </div>
          )}

          {/* Citação de impacto */}
          <div className="mt-12 max-w-3xl">
            <blockquote className="relative border-l-4 border-red-500 pl-4 italic text-gray-300">
              <p className="text-lg">
                "Métricas de vaidade fazem você se sentir bem, métricas de negócio fazem você ganhar dinheiro. Focamos
                no que realmente importa para o seu crescimento."
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
