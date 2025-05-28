"use client"

import { motion } from 'framer-motion';

export function StatCounter() {
  return (
    <section className="w-full py-8 bg-white border-b">
      <div className="container px-4 md:px-6">
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 w-full max-w-6xl">
            {/* Animação de contagem */}
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <motion.span
                className="text-3xl md:text-4xl font-bold text-red-600"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1 }}
                key="experience"
              >
                7+
              </motion.span>
              <span className="text-sm md:text-base text-gray-500 mt-2">Anos de Experiência</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <motion.span
                className="text-3xl md:text-4xl font-bold text-red-600"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1, delay: 0.2 }}
                key="clients"
              >
                33+
              </motion.span>
              <span className="text-sm md:text-base text-gray-500 mt-2">Clientes Atendidos</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <motion.span
                className="text-3xl md:text-4xl font-bold text-red-600"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1, delay: 0.4 }}
                key="satisfaction"
              >
                100%
              </motion.span>
              <span className="text-sm md:text-base text-gray-500 mt-2">Taxa de Satisfação</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <motion.span
                className="text-3xl md:text-4xl font-bold text-red-600"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1, delay: 0.6 }}
                key="projects"
              >
                500+
              </motion.span>
              <span className="text-sm md:text-base text-gray-500 mt-2">Projetos Entregues</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 text-center">
              <motion.span
                className="text-3xl md:text-4xl font-bold text-red-600"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 1, delay: 0.8 }}
                key="roas"
              >
                26x
              </motion.span>
              <span className="text-sm md:text-base text-gray-500 mt-2">ROAS Médio</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
