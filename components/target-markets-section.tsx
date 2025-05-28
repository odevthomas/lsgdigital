import { Building, GraduationCap, Hotel, Smartphone, Sparkles } from "lucide-react"

export function TargetMarketsSection() {
  return (
    <section id="mercados" className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 font-medium">
              Mercados-Alvo
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Setores que Atendemos</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Especialistas em mercados que valorizam qualidade, posicionamento e resultados
            </p>
          </div>

          {/* Ajuste na grid para ser responsiva */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 mx-auto max-w-7xl">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm bg-white">
              <div className="rounded-full bg-red-100 p-3">
                <Building className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold">Serviços Premium</h3>
              <p className="text-gray-500 text-center">
                Consultores, advogados, contadores e profissionais com marca pessoal que buscam clientes de alto valor.
              </p>
              <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="bg-red-600 h-full" style={{ width: "90%" }}></div>
              </div>
              <p className="text-sm text-gray-500">Especialidade: 90%</p>
            </div>

            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm bg-white">
              <div className="rounded-full bg-red-100 p-3">
                <GraduationCap className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold">Educação Privada</h3>
              <p className="text-gray-500 text-center">
                Escolas, faculdades, cursos especializados e instituições educacionais com ticket médio/alto.
              </p>
              <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="bg-red-600 h-full" style={{ width: "85%" }}></div>
              </div>
              <p className="text-sm text-gray-500">Especialidade: 85%</p>
            </div>

            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm bg-white">
              <div className="rounded-full bg-red-100 p-3">
                <Hotel className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold">Resorts e Clínicas</h3>
              <p className="text-gray-500 text-center">
                Hotéis de luxo, resorts, spas e clínicas médicas/estéticas com serviços exclusivos.
              </p>
              <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="bg-red-600 h-full" style={{ width: "95%" }}></div>
              </div>
              <p className="text-sm text-gray-500">Especialidade: 95%</p>
            </div>

            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm bg-white">
              <div className="rounded-full bg-red-100 p-3">
                <Smartphone className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold">Tecnologia</h3>
              <p className="text-gray-500 text-center">
                Startups, SaaS e empresas de tecnologia que precisam de aquisição de clientes qualificados.
              </p>
              <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="bg-red-600 h-full" style={{ width: "80%" }}></div>
              </div>
              <p className="text-sm text-gray-500">Especialidade: 80%</p>
            </div>

            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm bg-white">
              <div className="rounded-full bg-red-100 p-3">
                <Sparkles className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold">Beleza e Moda</h3>
              <p className="text-gray-500 text-center">
                Marcas de moda, cosméticos e beleza com posicionamento premium e foco em experiência.
              </p>
              <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="bg-red-600 h-full" style={{ width: "85%" }}></div>
              </div>
              <p className="text-sm text-gray-500">Especialidade: 85%</p>
            </div>

            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm bg-white">
              <div className="rounded-full bg-red-100 p-3">
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
                  className="h-6 w-6 text-red-600"
                >
                  <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                  <path d="M13 5v2" />
                  <path d="M13 17v2" />
                  <path d="M13 11v2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Outros Mercados</h3>
              <p className="text-gray-500 text-center">
                Atendemos negócios de diversos setores que compartilham nossa visão de crescimento com estrutura.
              </p>
              <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                <div className="bg-red-600 h-full" style={{ width: "75%" }}></div>
              </div>
              <p className="text-sm text-gray-500">Especialidade: 75%</p>
            </div>
          </div>

          {/* Frase de fechamento */}
          <p className="mt-8 text-lg text-gray-500">
            O que define nosso cliente ideal é visão de crescimento e compromisso com estrutura.
          </p>
        </div>
      </div>
    </section>
  )
}
