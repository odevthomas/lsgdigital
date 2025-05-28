"use client"

import { useState, useEffect } from "react"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isBlinking, setIsBlinking] = useState(true)

  useEffect(() => {
    const controlButton = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 300) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener("scroll", controlButton)
    return () => window.removeEventListener("scroll", controlButton)
  }, [lastScrollY])

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking((prev) => !prev)
    }, 3000)

    return () => clearInterval(blinkInterval)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      {/* Decorações: não interferem no clique */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="rounded-full bg-green-500 opacity-30 animate-ping w-full h-full"></div>
        <div className="rounded-full bg-green-500 opacity-20 animate-pulse w-full h-full absolute top-0 left-0"></div>
      </div>

      {/* Badge "Online Agora" */}
      <div
        className={`absolute -top-8 -right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10 pointer-events-none ${
          isBlinking ? "animate-bounce" : ""
        }`}
      >
        Online Agora
      </div>

      {/* Botão principal */}
      <a
        href="https://wa.me/5519981331191?text=Olá,%20gostaria%20de%20consultar%20um%20especialista%20da%20LSG%20Digital"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-20 flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-full shadow-xl transition-all duration-300 hover:scale-105 border-2 border-white hover:border-green-300"
        aria-label="Consultar um especialista via WhatsApp"
      >
        <img
          src="/Icons/wpp-icon.svg"
          alt="Ícone WhatsApp"
          width={18}
          height={18}
          className="animate-pulse"
        />
        <span className="hidden sm:inline text-base">Fale com um especialista</span>
        <span className="sm:hidden text-base">Fale conosco</span>
      </a>

      {/* Seta indicativa */}
      <div className="absolute -bottom-6 right-10 text-green-500 animate-bounce pointer-events-none">
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
          className="rotate-180"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </div>
  )
}
