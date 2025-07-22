import React from 'react';

const HeroBanner = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[500px] lg:h-[500px] overflow-hidden">
      {/* Fundo verde gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-600 to-green-800" />
      
      {/* Container das três imagens */}
      <div className="relative z-10 flex flex-col md:flex-row h-full">
        {/* Seção Marketing */}
        <div className="flex-1 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
            style={{
              backgroundImage: `url('/img/marketing.png')`,
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg bg-black/30 px-4 md:px-6 py-2 md:py-3 rounded-lg backdrop-blur-sm">
              Marketing
            </h2>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="h-1 md:h-full w-full md:w-1 bg-white/40" />

        {/* Seção Cultura */}
        <div className="flex-1 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
            style={{
              backgroundImage: `url('/img/cultura.png')`,
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg bg-black/30 px-4 md:px-6 py-2 md:py-3 rounded-lg backdrop-blur-sm">
              Cultura
            </h2>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="h-1 md:h-full w-full md:w-1 bg-white/40" />

        {/* Seção Turismo */}
        <div className="flex-1 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
            style={{
              backgroundImage: `url('/img/turismo.png')`,
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg bg-black/30 px-4 md:px-6 py-2 md:py-3 rounded-lg backdrop-blur-sm">
              Turismo
            </h2>
          </div>
        </div>
      </div>

      {/* Badge de experiência */}
      <div className="absolute top-4 right-4 z-20">
        <div className="bg-green-500 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-semibold flex items-center gap-1 md:gap-2">
          <span>★</span>
          <span className="hidden sm:inline">25 Anos de Experiência</span>
          <span className="sm:hidden">25 Anos</span>
        </div>
      </div>

      {/* Botões CTA */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex flex-col md:flex-row gap-2 md:gap-4">
        <button className="bg-blue-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors">
          <span>👍</span>
          <span className="hidden sm:inline">Veja nossos projetos de impacto →</span>
          <span className="sm:hidden">Projetos →</span>
        </button>
        <button className="bg-white text-gray-800 px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors">
          <span>💬</span>
          <span className="hidden sm:inline">Converse com a gente agora</span>
          <span className="sm:hidden">Fale conosco</span>
        </button>
      </div>
    </div>
  );
};

export default HeroBanner; 