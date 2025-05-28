"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"

export function SEOFaq() {
  return (
    <section id="faq" className="w-full py-12 md:py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-600 font-medium">
              Perguntas Frequentes
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Dúvidas Comuns Sobre Tráfego Pago</h2>
            <p className="text-gray-500 md:text-xl/relaxed">
              Respostas para as perguntas mais frequentes sobre nossa abordagem de engenharia de crescimento
            </p>
          </div>

          {/* Accordion Container */}
          <div className="w-full max-w-3xl mt-8">
            <Accordion type="single" collapsible className="w-full">
              {/* Accordion Item 1 */}
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg font-medium">
                  O que é o Método PRISMA™?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  O Método PRISMA™ é nossa metodologia proprietária em 7 etapas que inclui diagnóstico estratégico
                  profundo, desenho de funil com intenção comercial, setup técnico, campanhas com foco em ROI,
                  otimização diária, relatórios executivos e escalonamento validado. Desenvolvemos este método após anos
                  de experiência e testes com dezenas de clientes em diferentes segmentos.
                </AccordionContent>
              </AccordionItem>

              {/* Accordion Item 2 */}
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg font-medium">
                  Quanto tempo leva para ver resultados?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Os primeiros resultados começam a aparecer entre 30 a 60 dias, dependendo do seu mercado e da
                  maturidade digital do seu negócio. Nosso foco é em resultados sustentáveis e escaláveis, não em picos
                  temporários de performance. Trabalhamos com contratos mínimos de 3 meses justamente para garantir que
                  tenhamos tempo suficiente para implementar a estratégia completa e otimizá-la adequadamente.
                </AccordionContent>
              </AccordionItem>

              {/* Accordion Item 3 */}
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg font-medium">
                  Quais mercados a LSG Digital atende?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Atendemos principalmente serviços premium com marca pessoal, educação privada, resorts e clínicas com
                  ticket alto, tecnologia sob demanda e beleza e moda com posicionamento forte. O que define nosso
                  cliente ideal é visão de crescimento e compromisso com estrutura. Não trabalhamos com negócios que
                  buscam resultados imediatos sem investimento em estratégia de longo prazo.
                </AccordionContent>
              </AccordionItem>

              {/* Accordion Item 4 */}
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg font-medium">
                  Como a LSG Digital se diferencia de outras agências de marketing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Diferente de agências tradicionais, não tratamos tráfego como commodity. Somos engenheiros de
                  crescimento com foco em ROI, realizamos diagnóstico profundo antes de qualquer execução, e oferecemos
                  atendimento técnico sem terceirização. Nossa abordagem é personalizada para cada cliente, com foco em
                  métricas que realmente impactam o negócio, como custo de aquisição, valor do cliente e retorno sobre
                  investimento.
                </AccordionContent>
              </AccordionItem>

              {/* Accordion Item 5 */}
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-lg font-medium">
                  Qual é o investimento mínimo para trabalhar com a LSG Digital?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  O investimento varia conforme as necessidades específicas do seu negócio e objetivos de crescimento.
                  Trabalhamos com empresas que valorizam resultados de longo prazo e entendem marketing como
                  investimento estratégico. Para receber uma proposta personalizada, entre em contato conosco para um
                  diagnóstico gratuito. Nossos planos são estruturados para maximizar o ROI e garantir crescimento
                  sustentável.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
