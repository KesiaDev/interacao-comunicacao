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
  const scrollPosition = window.pageYOffset + 100; // Offset para melhor detecção
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  
  // Se estamos no topo da página, destacar "Início"
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

// Função para scroll suave para seções
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function scrollToContact() {
  window.location.href = 'contato.html';
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
  
// Funções para o Blog
function openBlogPost(postId) {
  // Dados dos posts do blog
  const blogPosts = {
    'marketing-cultural': {
      title: 'O Poder do Marketing Cultural para Empresas',
      content: `
        <div class="blog-post-content">
          <h1>O Poder do Marketing Cultural para Empresas</h1>
          <div class="blog-post-meta">
            <span><i class="fas fa-calendar"></i> 15 Jan 2024</span>
            <span><i class="fas fa-clock"></i> 5 min de leitura</span>
            <span><i class="fas fa-user"></i> Duda Rocha</span>
          </div>
          
          <p>O marketing cultural representa uma abordagem inovadora que conecta marcas com suas comunidades através da valorização da cultura local. Neste artigo, exploramos como empresas podem utilizar elementos culturais para criar conexões autênticas e duradouras com seu público.</p>
          
          <h2>Por que o Marketing Cultural Funciona?</h2>
          <p>A cultura é um elemento fundamental da identidade humana. Quando uma marca consegue se conectar com os valores culturais de uma comunidade, ela cria uma relação de confiança e identificação que vai muito além do simples consumo.</p>
          
          <h2>Estratégias Práticas</h2>
          <ul>
            <li>Patrocínio de eventos culturais locais</li>
            <li>Colaboração com artistas e artesãos</li>
            <li>Preservação de patrimônio histórico</li>
            <li>Desenvolvimento de produtos com identidade cultural</li>
          </ul>
          
          <h2>Cases de Sucesso</h2>
          <p>Empresas como a Fras-le e Randon Implementos têm demonstrado como o investimento em cultura pode gerar valor tanto para a marca quanto para a comunidade.</p>
          
          <p><strong>Conclusão:</strong> O marketing cultural não é apenas uma estratégia de comunicação, mas uma forma de contribuir para o desenvolvimento social e econômico das comunidades onde as empresas atuam.</p>
        </div>
      `
    },
    'turismo-sustentavel': {
      title: 'Desenvolvimento Turístico Sustentável',
      content: `
        <div class="blog-post-content">
          <h1>Desenvolvimento Turístico Sustentável</h1>
          <div class="blog-post-meta">
            <span><i class="fas fa-calendar"></i> 10 Jan 2024</span>
            <span><i class="fas fa-clock"></i> 7 min de leitura</span>
            <span><i class="fas fa-user"></i> Duda Rocha</span>
          </div>
          
          <p>O desenvolvimento turístico sustentável é fundamental para preservar a identidade local enquanto gera oportunidades econômicas. Neste artigo, compartilhamos estratégias comprovadas para criar destinos turísticos que respeitam e valorizam a cultura local.</p>
          
          <h2>Princípios do Turismo Sustentável</h2>
          <p>O turismo sustentável deve considerar três pilares fundamentais: ambiental, social e econômico. A chave está em encontrar o equilíbrio entre esses aspectos.</p>
          
          <h2>Estratégias de Implementação</h2>
          <ul>
            <li>Capacitação da comunidade local</li>
            <li>Preservação do patrimônio cultural</li>
            <li>Desenvolvimento de produtos autênticos</li>
            <li>Gestão responsável dos recursos</li>
          </ul>
          
          <h2>Experiências na Serra Gaúcha</h2>
          <p>Nossa experiência com vinícolas familiares demonstra como é possível criar roteiros turísticos que valorizam a tradição e geram renda para as comunidades locais.</p>
        </div>
      `
    },
    'politicas-culturais': {
      title: 'A Importância das Políticas Públicas Culturais',
      content: `
        <div class="blog-post-content">
          <h1>A Importância das Políticas Públicas Culturais</h1>
          <div class="blog-post-meta">
            <span><i class="fas fa-calendar"></i> 05 Jan 2024</span>
            <span><i class="fas fa-clock"></i> 6 min de leitura</span>
            <span><i class="fas fa-user"></i> Duda Rocha</span>
          </div>
          
          <p>As políticas públicas culturais são instrumentos fundamentais para o desenvolvimento social e econômico. Elas garantem o acesso à cultura, preservam o patrimônio e fomentam a economia criativa.</p>
          
          <h2>Impacto das Políticas Culturais</h2>
          <p>Políticas bem estruturadas podem transformar comunidades, criar empregos e fortalecer a identidade cultural de uma região.</p>
          
          <h2>Elementos de Sucesso</h2>
          <ul>
            <li>Participação da sociedade civil</li>
            <li>Transparência na gestão dos recursos</li>
            <li>Foco na diversidade cultural</li>
            <li>Integração com outras políticas públicas</li>
          </ul>
          
          <h2>Desafios e Oportunidades</h2>
          <p>O principal desafio é garantir que as políticas culturais sejam implementadas de forma eficaz e que os recursos sejam utilizados de maneira transparente e responsável.</p>
        </div>
      `
    }
  };
  
  const post = blogPosts[postId];
  if (post) {
    // Criar modal para o post
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'blogModal';
    modal.innerHTML = `
      <div class="modal-content" style="max-width: 800px; max-height: 90vh; overflow-y: auto;">
        <span class="close" onclick="closeBlogModal()">&times;</span>
        ${post.content}
        <div style="margin-top: 30px; text-align: center;">
          <button onclick="closeBlogModal()" style="background: var(--verde); color: white; border: none; padding: 12px 24px; border-radius: 25px; cursor: pointer;">Fechar</button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'block';
  }
}

function closeBlogModal() {
  const modal = document.getElementById('blogModal');
  if (modal) {
    modal.remove();
  }
}

// Newsletter subscription
function subscribeNewsletter(event) {
  event.preventDefault();
  const email = event.target.querySelector('input[type="email"]').value;
  
  // Simular envio da newsletter
  alert(`Obrigado! O email ${email} foi cadastrado com sucesso na nossa newsletter. Você receberá nossas novidades em breve!`);
  
  // Limpar o formulário
  event.target.reset();
}

// Adicionar estilos CSS para o blog post
const blogStyles = `
  <style>
    .blog-post-content {
      padding: 20px;
      line-height: 1.6;
    }
    
    .blog-post-content h1 {
      color: var(--verde);
      font-size: 2rem;
      margin-bottom: 16px;
    }
    
    .blog-post-content h2 {
      color: var(--preto);
      font-size: 1.4rem;
      margin: 24px 0 12px 0;
    }
    
    .blog-post-content p {
      margin-bottom: 16px;
      color: var(--cinza);
    }
    
    .blog-post-content ul {
      margin: 16px 0;
      padding-left: 20px;
    }
    
    .blog-post-content li {
      margin-bottom: 8px;
      color: var(--cinza);
    }
    
    .blog-post-meta {
      display: flex;
      gap: 20px;
      margin-bottom: 24px;
      font-size: 0.9rem;
      color: var(--cinza);
      flex-wrap: wrap;
    }
    
    .blog-post-meta span {
      display: flex;
      align-items: center;
      gap: 6px;
    }
  </style>
`;

// Adicionar estilos ao head
document.head.insertAdjacentHTML('beforeend', blogStyles);

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
  
// Integração com Instagram
function loadInstagramFeed() {
  const instagramGrid = document.getElementById('instagramGrid');
  
  // Simular carregamento de posts do Instagram
  // Em produção, isso seria uma API real do Instagram
  const mockPosts = [
    {
      id: 1,
      image: 'img/equipe.jpg',
      likes: 45,
      comments: 12,
      caption: 'Projeto Som, Luz e Imagem na Festa da Uva 🎭✨'
    },
    {
      id: 2,
      image: 'img/logo-interacao.png',
      likes: 38,
      comments: 8,
      caption: 'Documentário Domadores de Pedra em produção 🎬'
    },
    {
      id: 3,
      image: 'img/duda-rocha.jpg',
      likes: 52,
      comments: 15,
      caption: 'Consultoria em políticas culturais para municípios 🏛️'
    },
    {
      id: 4,
      image: 'img/equipe.jpg',
      likes: 41,
      comments: 9,
      caption: 'Enoturismo na Serra Gaúcha 🍷'
    },
    {
      id: 5,
      image: 'img/logo-interacao.png',
      likes: 35,
      comments: 6,
      caption: 'Evento Páscoa Della Vita em Farroupilha 🥚'
    },
    {
      id: 6,
      image: 'img/duda-rocha.jpg',
      likes: 48,
      comments: 11,
      caption: 'Projeto social Natal Itinerante ❤️'
    }
  ];
  
  // Limpar placeholder
  instagramGrid.innerHTML = '';
  
  // Adicionar posts
  mockPosts.forEach(post => {
    const postElement = createInstagramPost(post);
    instagramGrid.appendChild(postElement);
  });
}

function createInstagramPost(post) {
  const postDiv = document.createElement('div');
  postDiv.className = 'instagram-post';
  postDiv.innerHTML = `
    <img src="${post.image}" alt="Post do Instagram" loading="lazy">
    <div class="instagram-post-overlay">
      <div class="post-stats">
        <div class="stat">
          <i class="fas fa-heart"></i>
          <span>${post.likes}</span>
        </div>
        <div class="stat">
          <i class="fas fa-comment"></i>
          <span>${post.comments}</span>
        </div>
      </div>
    </div>
  `;
  
  // Adicionar evento de clique para abrir modal
  postDiv.addEventListener('click', () => {
    openInstagramModal(post);
  });
  
  return postDiv;
}

function openInstagramModal(post) {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.id = 'instagramModal';
  modal.innerHTML = `
    <div class="modal-content" style="max-width: 500px;">
      <span class="close" onclick="closeInstagramModal()">&times;</span>
      <div class="instagram-modal-content">
        <img src="${post.image}" alt="Post do Instagram" style="width: 100%; border-radius: 8px; margin-bottom: 16px;">
        <div class="post-info">
          <div class="post-stats-modal">
            <span><i class="fas fa-heart"></i> ${post.likes}</span>
            <span><i class="fas fa-comment"></i> ${post.comments}</span>
          </div>
          <p class="post-caption">${post.caption}</p>
        </div>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  modal.style.display = 'block';
}

function closeInstagramModal() {
  const modal = document.getElementById('instagramModal');
  if (modal) {
    modal.remove();
  }
}

// Carregar feed do Instagram quando a seção estiver visível
function checkInstagramSection() {
  const instagramSection = document.querySelector('#instagram');
  if (instagramSection) {
    const sectionTop = instagramSection.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      loadInstagramFeed();
      window.removeEventListener('scroll', checkInstagramSection);
    }
  }
}

window.addEventListener('scroll', checkInstagramSection);

// Adicionar estilos CSS para posts do Instagram
const instagramStyles = `
  <style>
    .post-stats {
      display: flex;
      gap: 20px;
      color: white;
      font-weight: 600;
    }
    
    .post-stats .stat {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    
    .post-stats-modal {
      display: flex;
      gap: 16px;
      margin-bottom: 12px;
      color: var(--cinza);
      font-size: 0.9rem;
    }
    
    .post-stats-modal span {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    
    .post-caption {
      color: var(--preto);
      line-height: 1.5;
      margin: 0;
    }
    
    .instagram-modal-content {
      padding: 20px;
    }
  </style>
`;

document.head.insertAdjacentHTML('beforeend', instagramStyles);
  
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
  
// Transparência dinâmica do header ao rolar
window.addEventListener('scroll', function() {
  const header = document.querySelector('.header-container');
  const modernHeader = document.querySelector('.modern-header');
  if (!header) return;
  if (window.scrollY > 30) {
    header.classList.add('scrolled');
    if (modernHeader) modernHeader.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
    if (modernHeader) modernHeader.classList.remove('scrolled');
  }
});
  