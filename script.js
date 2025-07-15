document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const id = link.getAttribute("href").substring(1);
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    });
  });
  
// Menu mobile animado
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');
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
document.querySelectorAll('#nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 900) closeMenu();
  });
});

function scrollToContact() {
  document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
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

window.addEventListener('scroll', checkTimeline);
  
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
  