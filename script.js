document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const id = link.getAttribute("href").substring(1);
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    });
  });
  
// Menu mobile animado
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-menu');
const overlay = document.querySelector('.menu-overlay');

function openMenu() {
  nav.classList.add('open');
  overlay.classList.add('active');
  menuToggle.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  nav.classList.remove('open');
  overlay.classList.remove('active');
  menuToggle.setAttribute('aria-expanded', 'false');
}

menuToggle.addEventListener('click', () => {
  if (nav.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
});

overlay.addEventListener('click', closeMenu);

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 900) closeMenu();
  });
});

// Atualizar navegação ativa baseada no scroll
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  const headerHeight = 100;
  const scrollPosition = window.pageYOffset + headerHeight + 50; // Offset considerando header fixo
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  
  // Se estamos no topo da página, destacar "Trabalho"
  if (scrollPosition < 200) {
    current = 'inicio';
  }
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav);

// Controle de visibilidade do CTA flutuante
function controlCTAFloat() {
  const ctaFloat = document.getElementById('ctaFloat');
  if (!ctaFloat) return;
  
  const scrollPosition = window.pageYOffset;
  const documentHeight = document.documentElement.scrollHeight;
  
  // Mostrar CTA flutuante após 30% do scroll ou quando estiver próximo do final
  const showThreshold = documentHeight * 0.3;
  const hideThreshold = documentHeight * 0.8;
  
  if (scrollPosition > showThreshold && scrollPosition < hideThreshold) {
    ctaFloat.classList.add('visible');
  } else {
    ctaFloat.classList.remove('visible');
  }
}

// Inicializar CTA flutuante
window.addEventListener('scroll', controlCTAFloat);
window.addEventListener('load', controlCTAFloat);

// Controle do vídeo de fundo
function initBackgroundVideo() {
  const video = document.querySelector('.banner-sobre-video');
  if (video) {
    // Garantir que o vídeo carregue corretamente
    video.addEventListener('loadeddata', function() {
      video.play().catch(function(error) {
        console.log('Vídeo não pôde ser reproduzido automaticamente:', error);
      });
    });

    // Pausar vídeo quando não estiver visível para economizar recursos
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.1 });

    observer.observe(video);
  }
}

// Inicializar vídeo de fundo
window.addEventListener('load', initBackgroundVideo);

// Função para scroll suave para seções
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const headerHeight = 100; // Altura do header fixo
    const sectionTop = section.offsetTop - headerHeight - 20; // Adiciona 20px de margem extra
    
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  }
}

function scrollToContact() {
  window.location.href = 'contato.html';
}

// Função específica para scroll para seção de clientes/parceiros
function scrollToClientes() {
  const clientesSection = document.getElementById('clientes');
  if (clientesSection) {
    const headerHeight = 100; // Aumentado para considerar padding e outros elementos
    const sectionTop = clientesSection.offsetTop - headerHeight - 150; // Adiciona 150px de margem extra
    
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  }
}
  
// Sistema de animações reveal ao scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  
  reveals.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

// Adicionar listener para scroll
window.addEventListener('scroll', revealOnScroll);

// Executar uma vez no carregamento para elementos já visíveis
document.addEventListener('DOMContentLoaded', revealOnScroll);
  
// Modal para portfólio
function openModal(projectId) {
  const modal = document.getElementById('portfolioModal');
  const modalContent = document.getElementById('modalContent');
  
  // Dados dos projetos (pode ser expandido)
  const projectData = {
    'som-luz': {
      title: 'Som, Luz e Imagem (Festa da Uva)',
      description: 'Espetáculo cênico premiado que resgatou a memória e identidade da região da Serra Gaúcha.',
      details: `
        <h2>Som, Luz e Imagem (Festa da Uva)</h2>
        <p><strong>Ano:</strong> 2015</p>
        <p><strong>Local:</strong> Caxias do Sul, RS</p>
        <p><strong>Descrição:</strong> Espetáculo cênico premiado que resgatou a memória e identidade da região da Serra Gaúcha, utilizando tecnologia de som, luz e projeções para contar a história da imigração italiana e da cultura da uva.</p>
        <p><strong>Impacto:</strong> Mais de 50.000 espectadores, prêmio de melhor espetáculo cultural do ano.</p>
        <p><strong>Tecnologias:</strong> Projeção mapeada, iluminação cênica, trilha sonora original.</p>
      `
    },
    'domadores': {
      title: 'Domadores de Pedra',
      description: 'Documentário sobre escultores e patrimônio cultural do RS.',
      details: `
        <h2>Domadores de Pedra</h2>
        <p><strong>Ano:</strong> 2018</p>
        <p><strong>Local:</strong> Região Metropolitana de Porto Alegre</p>
        <p><strong>Descrição:</strong> Documentário que retrata a vida e obra de escultores tradicionais do Rio Grande do Sul, preservando técnicas ancestrais de trabalho com pedra.</p>
        <p><strong>Impacto:</strong> Selecionado para festivais nacionais, exibido em TV pública.</p>
        <p><strong>Duração:</strong> 52 minutos</p>
      `
    },
    'tv-caxias': {
      title: 'TV Caxias',
      description: 'Programação comunitária e transmissões ao vivo de eventos culturais.',
      details: `
        <h2>TV Caxias</h2>
        <p><strong>Período:</strong> 2010-2015</p>
        <p><strong>Local:</strong> Caxias do Sul, RS</p>
        <p><strong>Descrição:</strong> Coordenação de programação comunitária e transmissões ao vivo de eventos culturais, festivais e manifestações artísticas locais.</p>
        <p><strong>Programas:</strong> Cobertura de eventos culturais, documentários locais, entrevistas com artistas.</p>
      `
    },
    'pascoa': {
      title: 'Páscoa Della Vita (Farroupilha)',
      description: 'Criação e execução do evento temático.',
      details: `
        <h2>Páscoa Della Vita (Farroupilha)</h2>
        <p><strong>Ano:</strong> 2019</p>
        <p><strong>Local:</strong> Farroupilha, RS</p>
        <p><strong>Descrição:</strong> Evento temático de Páscoa que integrou tradições religiosas com cultura italiana, criando uma experiência única para a comunidade.</p>
        <p><strong>Atrações:</strong> Espetáculo de luzes, música sacra, gastronomia típica.</p>
      `
    },
    'natal': {
      title: 'Natal Itinerante',
      description: 'Projeto social durante a pandemia, levando esperança a comunidades.',
      details: `
        <h2>Natal Itinerante</h2>
        <p><strong>Ano:</strong> 2020</p>
        <p><strong>Local:</strong> Região Metropolitana de Porto Alegre</p>
        <p><strong>Descrição:</strong> Projeto social inovador durante a pandemia, levando esperança e alegria a comunidades carentes através de apresentações artísticas itinerantes.</p>
        <p><strong>Impacto:</strong> Mais de 20 comunidades atendidas, 5.000 pessoas beneficiadas.</p>
      `
    },
    'vinicolas': {
      title: 'Vinícolas e Turismo Regional',
      description: 'Planejamento de enoturismo e eventos para vinícolas familiares.',
      details: `
        <h2>Vinícolas e Turismo Regional</h2>
        <p><strong>Período:</strong> 2016-2023</p>
        <p><strong>Local:</strong> Serra Gaúcha, RS</p>
        <p><strong>Descrição:</strong> Planejamento e execução de projetos de enoturismo e eventos para vinícolas familiares, integrando gastronomia, cultura e turismo.</p>
        <p><strong>Serviços:</strong> Roteiros turísticos, eventos gastronômicos, marketing territorial.</p>
      `
    }
  };
  
  const project = projectData[projectId];
  if (project) {
    modalContent.innerHTML = `
      <div style="padding: 40px;">
        ${project.details}
        <div style="margin-top: 30px; text-align: center;">
          <button onclick="closeModal()" style="background: var(--verde); color: white; border: none; padding: 12px 24px; border-radius: 25px; cursor: pointer;">Fechar</button>
        </div>
      </div>
    `;
    modal.style.display = 'block';
  }
}

function closeModal() {
  const modal = document.getElementById('portfolioModal');
  modal.style.display = 'none';
}

// Sistema "Leia mais"
function toggleLeiaMais(button) {
  const card = button.closest('.pesquisa-card');
  const resumo = card.querySelector('.resumo');
  const conteudoCompleto = card.querySelector('.conteudo-completo');
  
  if (conteudoCompleto.style.display === 'none') {
    resumo.style.display = 'none';
    conteudoCompleto.style.display = 'block';
    button.textContent = 'Leia menos';
  } else {
    resumo.style.display = 'block';
    conteudoCompleto.style.display = 'none';
    button.textContent = 'Leia mais';
  }
}

// Animação da linha do tempo
function animateTimeline() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  timelineItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('active');
    }, index * 200);
  });
}

// Animação da timeline compacta
function animateTimelineCompact() {
  const timelineItems = document.querySelectorAll('.timeline-item-compact');
  
  timelineItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('active');
    }, index * 150);
  });
}

// Adicionar animação da linha do tempo ao scroll
function checkTimeline() {
  const timeline = document.querySelector('.timeline');
  if (timeline) {
    const timelineTop = timeline.getBoundingClientRect().top;
    if (timelineTop < window.innerHeight - 100) {
      animateTimeline();
      window.removeEventListener('scroll', checkTimeline);
    }
  }
}

// Adicionar animação da timeline compacta ao scroll
function checkTimelineCompact() {
  const timelineCompact = document.querySelector('.timeline-compact');
  if (timelineCompact) {
    const timelineTop = timelineCompact.getBoundingClientRect().top;
    if (timelineTop < window.innerHeight - 100) {
      animateTimelineCompact();
      window.removeEventListener('scroll', checkTimelineCompact);
    }
  }
}

window.addEventListener('scroll', checkTimeline);
window.addEventListener('scroll', checkTimelineCompact);
  
// Animação de contagem para estatísticas
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  function updateCounter() {
    start += increment;
    if (start < target) {
      element.textContent = Math.floor(start);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  }
  
  updateCounter();
}

function animateStats() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  statNumbers.forEach(element => {
    const target = parseInt(element.getAttribute('data-target'));
    animateCounter(element, target);
  });
}

// Verificar quando a seção de estatísticas está visível
function checkStats() {
  const statsSection = document.querySelector('#estatisticas');
  if (statsSection) {
    const statsTop = statsSection.getBoundingClientRect().top;
    if (statsTop < window.innerHeight - 100) {
      animateStats();
      window.removeEventListener('scroll', checkStats);
    }
  }
}

window.addEventListener('scroll', checkStats);

// Funções para CTAs estratégicos
function solicitarProposta() {
  // Pode abrir um modal, formulário ou redirecionar
  alert('Funcionalidade de solicitação de proposta será implementada. Entre em contato pelo WhatsApp ou e-mail!');
  // scrollToContact();
}

function baixarPortfolio() {
  // Pode abrir um modal com download ou redirecionar
  alert('Portfólio completo será disponibilizado em breve!');
  // window.open('portfolio-completo.pdf', '_blank');
}

function agendarReuniao() {
  // Pode integrar com calendário ou abrir modal
  alert('Funcionalidade de agendamento será implementada. Entre em contato pelo WhatsApp!');
  // scrollToContact();
}
// Função para filtrar portfólio
function filterPortfolio(category) {
  const cards = document.querySelectorAll('.portfolio-card');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCount = document.getElementById('projectCount');
  let visibleCount = 0;
  
  // Remover classe active de todos os botões
  filterBtns.forEach(btn => btn.classList.remove('active'));
  
  // Adicionar classe active ao botão clicado
  event.target.classList.add('active');
  
  // Filtrar cards
  cards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    
    if (category === 'todos' || cardCategory === category) {
      card.classList.remove('hidden');
      visibleCount++;
    } else {
      card.classList.add('hidden');
    }
  });
  
  // Atualizar contador
  projectCount.textContent = visibleCount;
  
  // Animação de entrada para cards visíveis
  setTimeout(() => {
    cards.forEach(card => {
      if (!card.classList.contains('hidden')) {
        card.style.animation = 'fadeInUp 0.6s ease forwards';
      }
    });
  }, 100);
}

// Adicionar animação CSS para entrada dos cards
const filterAnimation = `
  <style>
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  </style>
`;

document.head.insertAdjacentHTML('beforeend', filterAnimation);
  
// Lazy Loading e Otimização de Imagens
function initLazyLoading() {
  // Verificar se o navegador suporta Intersection Observer
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          loadImage(img);
          observer.unobserve(img);
        }
      });
    });

    // Observar todas as imagens com data-src
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback para navegadores mais antigos
    document.querySelectorAll('img[data-src]').forEach(img => {
      loadImage(img);
    });
  }
}

function loadImage(img) {
  const src = img.getAttribute('data-src');
  if (src) {
    // Verificar se o navegador suporta WebP
    if (supportsWebP()) {
      const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      img.src = webpSrc;
    } else {
      img.src = src;
    }
    
    img.classList.add('loaded');
    img.removeAttribute('data-src');
  }
}

function supportsWebP() {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
}

// Otimizar imagens existentes
function optimizeImages() {
  const images = document.querySelectorAll('img:not([data-src])');
  
  images.forEach(img => {
    // Adicionar lazy loading nativo se suportado
    if ('loading' in HTMLImageElement.prototype) {
      img.loading = 'lazy';
    }
    
    // Adicionar classes para animação
    img.classList.add('image-optimized');
    
    // Adicionar fallback para erro de carregamento
    img.addEventListener('error', function() {
      this.style.display = 'none';
    });
  });
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  initLazyLoading();
  optimizeImages();
});

// Adicionar estilos CSS para lazy loading
const lazyLoadingStyles = `
  <style>
    img[data-src] {
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    img.loaded {
      opacity: 1;
    }
    
    .image-optimized {
      transition: transform 0.3s ease;
    }
    
    .image-optimized:hover {
      transform: scale(1.02);
    }
    
    /* Placeholder para imagens carregando */
    img[data-src]::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
    }
    
    @keyframes loading {
      0% {
        background-position: 200% 0;
      }
      100% {
        background-position: -200% 0;
      }
    }
  </style>
`;

document.head.insertAdjacentHTML('beforeend', lazyLoadingStyles);
// Funções para as novas páginas

// Enviar formulário de contato
function enviarFormulario(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const dados = {
    nome: formData.get('nome'),
    email: formData.get('email'),
    telefone: formData.get('telefone'),
    empresa: formData.get('empresa'),
    servico: formData.get('servico'),
    mensagem: formData.get('mensagem'),
    newsletter: formData.get('newsletter')
  };
  
  // Simular envio do formulário
  console.log('Dados do formulário:', dados);
  
  // Mostrar mensagem de sucesso
  alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
  
  // Limpar formulário
  event.target.reset();
}

// Toggle FAQ
function toggleFAQ(element) {
  const faqItem = element.closest('.faq-item');
  const isActive = faqItem.classList.contains('active');
  
  // Fechar todos os outros itens
  document.querySelectorAll('.faq-item').forEach(item => {
    item.classList.remove('active');
  });
  
  // Abrir o item clicado se não estava ativo
  if (!isActive) {
    faqItem.classList.add('active');
  }
}

// Função para agendar reunião
function agendarReuniao() {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.id = 'agendamentoModal';
  modal.innerHTML = `
    <div class="modal-content" style="max-width: 500px;">
      <span class="close" onclick="closeAgendamentoModal()">&times;</span>
      <div style="padding: 20px;">
        <h2 style="color: var(--verde); margin-bottom: 20px;">Agendar Reunião</h2>
        <p>Para agendar uma reunião, entre em contato conosco através de:</p>
        <ul style="margin: 20px 0; padding-left: 20px;">
          <li><strong>WhatsApp:</strong> (54) 99999-9999</li>
          <li><strong>E-mail:</strong> contato@interacao.comunicacao.com</li>
          <li><strong>Telefone:</strong> (54) 99999-9999</li>
        </ul>
        <p>Nossa equipe entrará em contato para confirmar o horário e formato da reunião (presencial ou online).</p>
        <div style="text-align: center; margin-top: 30px;">
          <a href="https://wa.me/5554999999999" target="_blank" rel="noopener" style="background: var(--verde); color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; display: inline-block;">
            <i class="fab fa-whatsapp"></i> Agendar via WhatsApp
          </a>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  modal.style.display = 'block';
}

function closeAgendamentoModal() {
  const modal = document.getElementById('agendamentoModal');
  if (modal) {
    modal.remove();
  }
}

// Função para solicitar proposta
function solicitarProposta() {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.id = 'propostaModal';
  modal.innerHTML = `
    <div class="modal-content" style="max-width: 600px;">
      <span class="close" onclick="closePropostaModal()">&times;</span>
      <div style="padding: 20px;">
        <h2 style="color: var(--verde); margin-bottom: 20px;">Solicitar Proposta</h2>
        <p>Para solicitar uma proposta personalizada, preencha o formulário de contato ou entre em contato diretamente:</p>
        
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: var(--preto); margin-bottom: 15px;">Informações necessárias:</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li>Tipo de projeto ou serviço</li>
            <li>Objetivos e resultados esperados</li>
            <li>Cronograma desejado</li>
            <li>Orçamento disponível (se aplicável)</li>
            <li>Informações sobre sua empresa/organização</li>
          </ul>
        </div>
        
        <p><strong>Prazo para proposta:</strong> 5 dias úteis após o primeiro contato.</p>
        
        <div style="text-align: center; margin-top: 30px;">
          <a href="contato.html" style="background: var(--verde); color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; display: inline-block; margin-right: 10px;">
            <i class="fas fa-paper-plane"></i> Enviar Formulário
          </a>
          <a href="https://wa.me/5554999999999" target="_blank" rel="noopener" style="background: var(--azul); color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; display: inline-block;">
            <i class="fab fa-whatsapp"></i> WhatsApp
          </a>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  modal.style.display = 'block';
}

function closePropostaModal() {
  const modal = document.getElementById('propostaModal');
  if (modal) {
    modal.remove();
  }
}

// Função para baixar portfólio
function baixarPortfolio() {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.id = 'portfolioModal';
  modal.innerHTML = `
    <div class="modal-content" style="max-width: 500px;">
      <span class="close" onclick="closePortfolioModal()">&times;</span>
      <div style="padding: 20px; text-align: center;">
        <h2 style="color: var(--verde); margin-bottom: 20px;">Portfólio Completo</h2>
        <p>Nosso portfólio completo será disponibilizado em breve!</p>
        <p>Enquanto isso, você pode:</p>
        <ul style="text-align: left; margin: 20px 0;">
          <li>Explorar nossos projetos na página de serviços</li>
          <li>Ver nossos cases de sucesso</li>
          <li>Entrar em contato para conhecer mais detalhes</li>
        </ul>
        <div style="margin-top: 30px;">
          <a href="servicos.html" style="background: var(--verde); color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; display: inline-block; margin-right: 10px;">
            Ver Projetos
          </a>
          <a href="contato.html" style="background: var(--azul); color: white; padding: 12px 24px; border-radius: 25px; text-decoration: none; display: inline-block;">
            Solicitar Informações
          </a>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  modal.style.display = 'block';
}

function closePortfolioModal() {
  const modal = document.getElementById('portfolioModal');
  if (modal) {
    modal.remove();
  }
}

// Inicializar funcionalidades quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar lazy loading
  initLazyLoading();
  optimizeImages();
  
  // Adicionar listeners para FAQ se existir
  const faqItems = document.querySelectorAll('.faq-item');
  if (faqItems.length > 0) {
    faqItems.forEach(item => {
      const pergunta = item.querySelector('.faq-pergunta');
      if (pergunta) {
        pergunta.addEventListener('click', () => toggleFAQ(pergunta));
      }
    });
  }
  
  // Adicionar listeners para links do menu
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const sectionId = href.substring(1); // Remove o #
      scrollToSection(sectionId);
    });
  });
});
  
// Cards de frases progressivas
function mostrarCardsProgressivos() {
  const cards = document.querySelectorAll('#frase1, #frase2, #frase3');
  let delay = 0;
  
  cards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (cardTop < windowHeight * 0.8 && !card.classList.contains('visible')) {
      setTimeout(() => {
        card.classList.add('visible');
      }, delay);
      delay += 600;
    }
  });
}

window.addEventListener('scroll', mostrarCardsProgressivos);
window.addEventListener('load', mostrarCardsProgressivos);

// Controle dos vídeos de fundo dos valores
function initValoresVideos() {
  const valorVideos = document.querySelectorAll('.valor-video');
  
  valorVideos.forEach(video => {
    // Pausar vídeo quando não está visível
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.3 });
    
    observer.observe(video);
    
    // Garantir que o vídeo carregue corretamente
    video.addEventListener('loadeddata', () => {
      video.play();
    });
  });
}

window.addEventListener('load', initValoresVideos);
  

  