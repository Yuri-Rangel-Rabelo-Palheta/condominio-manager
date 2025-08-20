"use client";

import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Sistema de Gerenciamento de Condomínio
        </h1>
        <p className="max-w-2xl text-lg md:text-xl mb-6">
          Pague seus boletos, acompanhe comunicados e facilite a gestão do seu
          condomínio em um só lugar.
        </p>
        <a
          href="/auth/login"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Acessar Conta
        </a>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 flex-grow">
        <FeatureCard
          title="Pagamento de Boletos"
          description="Pague seu condomínio online de forma rápida e segura pelo Stripe."
          icon="💳"
        />
        <FeatureCard
          title="Comunicados"
          description="Receba avisos e comunicados do síndico diretamente na plataforma."
          icon="📢"
        />
        <FeatureCard
          title="Gestão de Usuários"
          description="Controle de moradores, síndicos e administradores em um só lugar."
          icon="👥"
        />
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-100 border-t">
        <p className="text-gray-600">© {new Date().getFullYear()} - Condominio Manager</p>
      </footer>
    </div>
  );
}
