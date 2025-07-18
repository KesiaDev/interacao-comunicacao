# LogoCarousel Component

Um componente React moderno para exibir logos de clientes em um carrossel horizontal com animação automática.

## Características

- ✅ **Carrossel horizontal** com scroll automático
- ✅ **Loop infinito** - os logos se repetem continuamente
- ✅ **Responsivo** - funciona bem em mobile e desktop
- ✅ **Efeitos de hover** - escala e mudança de cor
- ✅ **Animações suaves** - transições fluidas
- ✅ **Pausa no hover** - animação para quando o mouse está sobre o carrossel
- ✅ **Logos com fundo transparente** - formato PNG
- ✅ **TailwindCSS** - sem dependências externas

## Estrutura de Arquivos

```
src/
├── components/
│   ├── LogoCarousel.jsx
│   └── LogoCarousel.css
├── assets/
│   └── logos/
│       ├── cliente-frasle.png
│       ├── cliente-unimed.png
│       ├── cliente-randon.png
│       ├── cliente-prolar.png
│       ├── cliente-rede-multimercados.png
│       ├── cliente-nl-informatica.png
│       ├── cliente-metalurgicos.png
│       ├── cliente-sindilojas.png
│       ├── cliente-luiz-argenta.png
│       ├── cliente-mioranza.png
│       ├── cliente-espaco3.png
│       └── cliente-trigo.png
└── App.jsx
```

## Como Usar

### 1. Importar o componente

```jsx
import LogoCarousel from './components/LogoCarousel';
import './components/LogoCarousel.css';
```

### 2. Usar no seu componente

```jsx
function MyComponent() {
  return (
    <div>
      <LogoCarousel />
    </div>
  );
}
```

## Funcionalidades

### Animações
- **Scroll automático**: Os logos rolam da esquerda para a direita automaticamente
- **Loop infinito**: Quando chega ao final, volta ao início sem interrupção
- **Pausa no hover**: A animação para quando o mouse está sobre o carrossel

### Efeitos Visuais
- **Hover scale**: Os logos aumentam levemente quando hover
- **Grayscale to color**: Os logos começam em escala de cinza e ficam coloridos no hover
- **Gradientes laterais**: Efeito de fade nas bordas
- **Overlay sutil**: Overlay verde sutil no hover

### Responsividade
- **Mobile**: Logos menores (h-16) com gap menor
- **Tablet**: Logos médios (h-20) com gap médio
- **Desktop**: Logos grandes (h-24) com gap maior

## Personalização

### Cores
O componente usa as cores do TailwindCSS:
- Verde: `green-500` (cor principal)
- Cinza: `gray-900`, `gray-600`, `gray-300`
- Branco: `white`

### Tamanhos
- **Logos**: `h-16 md:h-20 lg:h-24`
- **Gaps**: `gap-8 md:gap-12 lg:gap-16`
- **Container**: `max-w-7xl`

### Velocidade da Animação
Para alterar a velocidade, modifique o valor no `setInterval`:
```jsx
const animationInterval = setInterval(animateCarousel, 30); // 30ms = mais rápido
```

## Requisitos

- React 16.8+ (para hooks)
- TailwindCSS
- Logos em formato PNG com fundo transparente

## Logos Incluídos

1. **Frasle** - cliente-frasle.png
2. **Unimed** - cliente-unimed.png
3. **Randon Implementos** - cliente-randon.png
4. **Prolar** - cliente-prolar.png
5. **Rede Multimercados** - cliente-rede-multimercados.png
6. **NL Informática** - cliente-nl-informatica.png
7. **Sindicato dos Metalúrgicos** - cliente-metalurgicos.png
8. **Sindilojas** - cliente-sindilojas.png
9. **Luiz Argenta** - cliente-luiz-argenta.png
10. **Mioranza** - cliente-mioranza.png
11. **Espaço 3** - cliente-espaco3.png
12. **Instituto Brasileiro do Trigo** - cliente-trigo.png

## Adicionando Novos Logos

1. Adicione o arquivo PNG na pasta `src/assets/logos/`
2. Importe o logo no componente:
```jsx
import novoLogo from '../assets/logos/novo-logo.png';
```
3. Adicione ao array `logos`:
```jsx
{ src: novoLogo, alt: 'Nome da Empresa' }
``` 