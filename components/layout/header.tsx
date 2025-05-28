"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/lsglogo-removebg-preview.png"
              alt="LSG Digital"
              width={200}
              height={200}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: "#clientes", label: "Clientes" },
              { href: "#video-depoimentos", label: "Depoimentos" },
              { href: "#diferencial", label: "Diferencial" },
              { href: "#metodologia", label: "Metodologia" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-red-600 transition-all duration-300 hover:underline underline-offset-4"
              >
                {item.label}
              </Link>
            ))}
            <Button
              as="a"
              href="#contato"
              variant="default"
              size="sm"
              className="transition-all duration-300 hover:scale-105"
            >
              Falar com Especialista
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors duration-300"
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {[
                { href: "#clientes", label: "Clientes" },
                { href: "#video-depoimentos", label: "Depoimentos" },
                { href: "#diferencial", label: "Diferencial" },
                { href: "#metodologia", label: "Metodologia" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-gray-600 hover:text-red-600 transition-all duration-300 px-4 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                as="a"
                href="#contato"
                variant="default"
                size="sm"
                className="mx-4 bg-gray-900 hover:bg-red-600 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Falar com Especialista
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
export default Header;