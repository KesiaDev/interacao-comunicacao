import React from 'react';
import HeroBanner from '../components/HeroBanner';
// ou import HeroBannerOptimized from '../components/HeroBannerOptimized';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Banner Hero */}
      <HeroBanner />
      
      {/* Resto do conteúdo da página */}
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Bem-vindo à Interação Comunicação Criativa
        </h2>
        <p className="text-lg text-gray-600">
          Conectamos territórios, preservamos memórias e inspiramos pessoas.
        </p>
      </main>
    </div>
  );
} 