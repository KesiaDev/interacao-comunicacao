import React from 'react';
import LogoCarousel from './components/LogoCarousel';
import './components/LogoCarousel.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header - Estilo Sólides */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                Interação
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                Início
              </a>
              <a href="#sobre" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                Sobre
              </a>
              <a href="#servicos" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                Serviços
              </a>
              <a href="#contato" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
                Contato
              </a>
            </nav>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Fale Conosco
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section - Estilo Sólides */}
        <section className="bg-gradient-to-br from-green-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Marketing Cultural e{' '}
                <span className="text-green-600">Turismo</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
                Conectamos territórios, preservamos memórias e inspiramos pessoas através de soluções criativas e sustentáveis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Conheça Nossos Projetos
                </button>
                <button className="bg-white hover:bg-gray-50 text-green-600 font-semibold py-4 px-8 rounded-xl border-2 border-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Agendar Reunião
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Carrossel de Logos */}
        <LogoCarousel />

        {/* Seção de Diferenciais - Estilo Sólides */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Por que escolher a Interação?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nossa experiência única em marketing cultural e turismo nos diferencia no mercado.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Experiência Comprovada</h3>
                <p className="text-gray-600">
                  25 anos de experiência em projetos culturais e turísticos com resultados comprovados.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Inovação Criativa</h3>
                <p className="text-gray-600">
                  Soluções inovadoras que combinam tecnologia, arte e cultura para experiências únicas.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Parceria Completa</h3>
                <p className="text-gray-600">
                  Acompanhamos cada etapa do seu projeto com dedicação e expertise especializada.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Estilo Sólides */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Interação</h3>
              <p className="text-gray-400">
                Marketing cultural e turismo com 25 anos de experiência.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Marketing Cultural</li>
                <li>Turismo Regional</li>
                <li>Produção Audiovisual</li>
                <li>Eventos Culturais</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contato@interacao.com</li>
                <li>(54) 99999-9999</li>
                <li>Caxias do Sul, RS</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  📘
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  📷
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  💼
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Interação. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App; 