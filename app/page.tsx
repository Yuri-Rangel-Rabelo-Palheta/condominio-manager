"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Feature Cards */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-8">
        <FeatureCard
          title="Pagamentos Online"
          description="Pague seus boletos de forma rápida e segura com Stripe."
          icon="💳"
        />
        <FeatureCard
          title="Gestão de Condomínio"
          description="O síndico gerencia comunicados, pagamentos e relatórios em um só lugar."
          icon="🏢"
        />
        <FeatureCard
          title="Administração Completa"
          description="O administrador acompanha usuários, finanças e acessos ao sistema."
          icon="👥"
        />
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-blue-600 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Tudo em um único sistema
        </h2>
        <p className="mb-6">
          Experimente agora e facilite a vida no seu condomínio.
        </p>
        <button className="px-8 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition">
          Criar Conta
        </button>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
