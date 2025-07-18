import React, { useEffect, useRef } from 'react';

// Importar todos os logos dos clientes
import clienteFrasle from '../assets/logos/cliente-frasle.png';
import clienteUnimed from '../assets/logos/cliente-unimed.png';
import clienteRandon from '../assets/logos/cliente-randon.png';
import clienteProlar from '../assets/logos/cliente-prolar.png';
import clienteMultimercados from '../assets/logos/cliente-rede-multimercados.png';
import clienteNl from '../assets/logos/cliente-nl-informatica.png';
import clienteMetalurgicos from '../assets/logos/cliente-metalurgicos.png';
import clienteSindilojas from '../assets/logos/cliente-sindilojas.png';
import clienteLuizArgenta from '../assets/logos/cliente-luiz-argenta.png';
import clienteMioranza from '../assets/logos/cliente-mioranza.png';
import clienteEspaco3 from '../assets/logos/cliente-espaco3.png';
import clienteTrigo from '../assets/logos/cliente-trigo.png';

const LogoCarousel = () => {
  const carouselRef = useRef(null);

  // Array com todos os logos dos clientes
  const logos = [
    { src: clienteFrasle, alt: 'Frasle', name: 'Frasle' },
    { src: clienteUnimed, alt: 'Unimed', name: 'Unimed' },
    { src: clienteRandon, alt: 'Randon Implementos', name: 'Randon' },
    { src: clienteProlar, alt: 'Prolar', name: 'Prolar' },
    { src: clienteMultimercados, alt: 'Rede Multimercados', name: 'Multimercados' },
    { src: clienteNl, alt: 'NL Informática', name: 'NL Informática' },
    { src: clienteMetalurgicos, alt: 'Sindicato dos Metalúrgicos', name: 'Sindicato Metalúrgicos' },
    { src: clienteSindilojas, alt: 'Sindilojas', name: 'Sindilojas' },
    { src: clienteLuizArgenta, alt: 'Luiz Argenta', name: 'Luiz Argenta' },
    { src: clienteMioranza, alt: 'Mioranza', name: 'Mioranza' },
    { src: clienteEspaco3, alt: 'Espaço 3', name: 'Espaço 3' },
    { src: clienteTrigo, alt: 'Instituto Brasileiro do Trigo', name: 'IBTrigo' },
  ];

  // Duplicar os logos para criar o efeito de loop infinito
  const duplicatedLogos = [...logos, ...logos, ...logos];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Função para animar o carrossel
    const animateCarousel = () => {
      if (carousel.scrollLeft >= carousel.scrollWidth / 3) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += 0.5; // Movimento mais suave
      }
    };

    // Iniciar animação automática
    const animationInterval = setInterval(animateCarousel, 20);

    // Pausar animação no hover
    const handleMouseEnter = () => {
      clearInterval(animationInterval);
    };

    const handleMouseLeave = () => {
      // Reiniciar animação quando o mouse sair
      const newInterval = setInterval(animateCarousel, 20);
      return () => clearInterval(newInterval);
    };

    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(animationInterval);
      carousel.removeEventListener('mouseenter', handleMouseEnter);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da seção - Estilo Sólides */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Clientes e Parceiros Atendidos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empresas e organizações que confiam na Interação para seus projetos de marketing cultural e turismo
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-green-600 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Container do carrossel - Estilo moderno */}
        <div className="relative overflow-hidden">
          {/* Carrossel principal */}
          <div
            ref={carouselRef}
            className="flex items-center gap-12 md:gap-16 lg:gap-20 overflow-x-auto scrollbar-hide"
            style={{
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center justify-center group"
              >
                {/* Card do logo - Estilo Sólides */}
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ease-out p-8 md:p-10 border border-gray-100 hover:border-green-200 min-w-[200px] md:min-w-[240px]">
                  <div className="relative">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-16 md:h-20 lg:h-24 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 ease-out transform group-hover:scale-110"
                      style={{
                        maxWidth: '180px',
                        minWidth: '140px',
                      }}
                    />
                    
                    {/* Overlay sutil no hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>
                  
                  {/* Nome da empresa */}
                  <div className="mt-4 text-center">
                    <p className="text-sm md:text-base font-medium text-gray-700 group-hover:text-green-600 transition-colors duration-300">
                      {logo.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradientes nas laterais para efeito de fade - Estilo Sólides */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
        </div>

        {/* Estatísticas - Estilo Sólides */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">25+</div>
            <div className="text-gray-600 font-medium">Anos de Experiência</div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">200+</div>
            <div className="text-gray-600 font-medium">Projetos Realizados</div>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Cidades Atendidas</div>
          </div>
        </div>

        {/* CTA - Estilo Sólides */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Quer fazer parte desta lista?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa 
            a se conectar com a cultura e o turismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Agendar Demonstração
            </button>
            <button className="bg-white hover:bg-gray-50 text-green-600 font-semibold py-4 px-8 rounded-xl border-2 border-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Ver Nossos Projetos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel; 