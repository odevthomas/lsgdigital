import { CheckCircle } from "lucide-react"

export function ValuesSection() {
  return (
    <section id="valores" className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 font-medium">
              Valores Inegociáveis
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Princípios que Guiam Nosso Trabalho</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              20 princípios essenciais que definem nossa abordagem
            </p>
          </div>

          {/* Ajuste na grid para ser responsiva */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mx-auto max-w-7xl">
            {/* Exemplo de item da grid */}
            <div className="flex items-start space-x-2 rounded-lg border bg-white p-6 shadow-sm">
              <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              <div className="space-y-1 text-left">
                <h3 className="font-medium">Diagnóstico antes da mídia</h3>
                <p className="text-sm text-gray-500">Entendemos profundamente antes de executar</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-2 rounded-lg border bg-white p-6 shadow-sm">
              <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              <div className="space-y-1 text-left">
                <h3 className="font-medium">ROI acima de vaidade</h3>
                <p className="text-sm text-gray-500">Focamos em resultados, não em métricas superficiais</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-2 rounded-lg border bg-white p-6 shadow-sm">
              <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              <div className="space-y-1 text-left">
                <h3 className="font-medium">Escuta profunda</h3>
                <p className="text-sm text-gray-500">Ouvimos atentamente antes de propor soluções</p>
              </div>
            </div>

            {/* Repetir esse bloco para os outros princípios */}
            <div className="flex items-start space-x-2 rounded-lg border bg-white p-6 shadow-sm">
              <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              <div className="space-y-1 text-left">
                <h3 className="font-medium">Estratégia personalizada</h3>
                <p className="text-sm text-gray-500">Criada do zero para cada cliente</p>
              </div>
            </div>
            <div className="flex items-start space-x-2 rounded-lg border bg-white p-6 shadow-sm">
              <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              <div className="space-y-1 text-left">
                <h3 className="font-medium">Performance com ética</h3>
                <p className="text-sm text-gray-500">Resultados sustentáveis e transparentes</p>
              </div>
            </div>
            <div className="flex items-start space-x-2 rounded-lg border bg-white p-6 shadow-sm">
              <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              <div className="space-y-1 text-left">
                <h3 className="font-medium">Atendimento técnico</h3>
                <p className="text-sm text-gray-500">Especialistas que entendem seu negócio</p>
              </div>
            </div>
            <div className="flex items-start space-x-2 rounded-lg border bg-white p-6 shadow-sm">
              <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              <div className="space-y-1 text-left">
                <h3 className="font-medium">Funis com intenção</h3>
                <p className="text-sm text-gray-500">Cada etapa planejada para conversão</p>
              </div>
            </div>
            <div className="flex items-start space-x-2 rounded-lg border bg-white p-6 shadow-sm">
              <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              <div className="space-y-1 text-left">
                <h3 className="font-medium">Tráfego como gestão</h3>
                <p className="text-sm text-gray-500">Ferramenta estratégica para crescimento</p>
              </div>
            </div>
            <div className="flex items-start space-x-2 rounded-lg border bg-white p-6 shadow-sm">
              <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              <div className="space-y-1 text-left">
                <h3 className="font-medium">Melhoria contínua</h3>
                <p className="text-sm text-gray-500">Otimização constante baseada em dados</p>
              </div>
            </div>
            <div className="flex items-start space-x-2 rounded-lg border bg-white p-6 shadow-sm">
              <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              <div className="space-y-1 text-left">
                <h3 className="font-medium">Crescimento responsável</h3>
                <p className="text-sm text-gray-500">Escala com controle e previsibilidade</p>
              </div>
            </div>
            <div className="flex items-start space-x-2 rounded-lg border bg-white p-6 shadow-sm">
              <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              <div className="space-y-1 text-left">
                <h3 className="font-medium">Automações inteligentes</h3>
                <p className="text-sm text-gray-500">Tecnologia a serviço da eficiência</p>
              </div>
            </div>
            <div className="flex items-start space-x-2 rounded-lg border bg-white p-6 shadow-sm">
              <CheckCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
              <div className="space-y-1 text-left">
                <h3 className="font-medium">Criativos com propósito</h3>
                <p className="text-sm text-gray-500">Qualidade acima de quantidade</p>
              </div>
            </div>
          </div>

          {/* Frase de fechamento */}
          <p className="mt-8 text-lg font-medium text-red-600">
            "Nenhum cliente é padrão. Nenhuma estratégia é reciclada."
          </p>
        </div>
      </div>
    </section>
  )
}
