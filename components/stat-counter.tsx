"use client"

export function StatCounter() {
  return (
    <section className="w-full py-8 bg-white border-b">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
          <div className="flex flex-col items-center justify-center p-4 text-center">
            <span className="text-3xl md:text-4xl font-bold text-red-600">7+</span>
            <span className="text-sm md:text-base text-gray-500 mt-2">Anos de Experiência</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 text-center">
            <span className="text-3xl md:text-4xl font-bold text-red-600">33+</span>
            <span className="text-sm md:text-base text-gray-500 mt-2">Clientes Atendidos</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 text-center">
            <span className="text-3xl md:text-4xl font-bold text-red-600">100%</span>
            <span className="text-sm md:text-base text-gray-500 mt-2">Taxa de Satisfação</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 text-center">
            <span className="text-3xl md:text-4xl font-bold text-red-600">500+</span>
            <span className="text-sm md:text-base text-gray-500 mt-2">Projetos Entregues</span>
          </div>
          <div className="flex flex-col items-center justify-center p-4 text-center">
            <span className="text-3xl md:text-4xl font-bold text-red-600">26x</span>
            <span className="text-sm md:text-base text-gray-500 mt-2">ROAS Médio</span>
          </div>
        </div>
      </div>
    </section>
  )
}
