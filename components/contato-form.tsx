"use client";

import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { submitForm } from "../app/actions";

export function ContatoForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess(false);

    try {
      const formData = new FormData(event.currentTarget);
      const result = await submitForm(formData);

      if (result.success) {
        setSuccess(true);
        formRef.current?.reset();
      } else {
        setError(result.error || "Erro ao enviar formulário");
      }
    } catch (err) {
      setError("Ocorreu um erro ao enviar sua mensagem. Tente novamente.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      {success && (
        <div className="p-4 bg-green-50 text-green-700 rounded-md">
          Mensagem enviada com sucesso! Entraremos em contato em breve.
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-50 text-red-700 rounded-md">{error}</div>
      )}

      <div className="grid gap-4">
        <div>
          <label
            htmlFor="nome"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nome Completo *
          </label>
          <input
            required
            type="text"
            name="nome"
            id="nome"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            E-mail Corporativo *
          </label>
          <input
            required
            type="email"
            name="email"
            id="email"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
          />
        </div>

        <div>
          <label
            htmlFor="telefone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Telefone *
          </label>
          <input
            required
            type="tel"
            name="telefone"
            id="telefone"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
          />
        </div>

        <div>
          <label
            htmlFor="empresa"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Empresa *
          </label>
          <input
            required
            type="text"
            name="empresa"
            id="empresa"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
          />
        </div>

        <div>
          <label
            htmlFor="mensagem"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Mensagem
          </label>
          <textarea
            name="mensagem"
            id="mensagem"
            rows={4}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-red-500 focus:ring-1 focus:ring-red-500"
          ></textarea>
        </div>
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-md transition"
      >
        {isLoading ? "Enviando..." : "SOLICITAR DIAGNÓSTICO AGORA"}
      </Button>
    </form>
  );
}