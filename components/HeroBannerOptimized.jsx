import React from 'react';
import Image from 'next/image';

const HeroBannerOptimized = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[500px] lg:h-[500px] overflow-hidden">
      {/* Imagem de fundo otimizada */}
      <Image
        src="/img/hero-background.jpg"
        alt="Banner hero - Marketing, Cultura e Turismo"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      
      {/* Overlay verde translúcido */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/80 via-green-600/70 to-green-800/80" />
      
      {/* Conteúdo centralizado */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Marketing • Cultura • Turismo
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Soluções completas em comunicação criativa
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerOptimized; 