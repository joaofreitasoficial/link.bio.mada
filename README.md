# MADA Cerimonial - Link in Bio Premium

Este projeto consiste em uma página de links de alto padrão ("Link na Bio") para a **MADA Cerimonial**, focada em assessoria e cerimonial de casamentos (Destination Wedding) no Rio de Janeiro. O design foi concebido para refletir a filosofia de "casamentos com propósito", utilizando uma estética luxuosa, orgânica e minimalista.

## 🌿 Identidade Visual (Style Guide)

A identidade visual foi construída com base no perfil sofisticado da marca:

- **Paleta de Cores**:
  - `Sage Green` (Verde Sálvia): #899481 (Cor principal, transmite serenidade e elegância).
  - `Off-white`: #FAF9F6 (Fundo limpo e arejado).
  - `Charcoal`: #333333 (Texto e contraste).
  - `Stone`: #E5E4E2 (Acentos neutros).
- **Tipografia**:
  - **Títulos**: *Playfair Display* (Serifada, clássica, remete ao luxo e tradição).
  - **Corpo e Botões**: *Inter* (Sans-serif, moderna, legível e limpa).
- **Ativos**: Ícones 3D personalizados com acabamento fosco (matte) em tom Sálvia.

## 📁 Estrutura do Projeto

```text
link.bio.mada/
├── assets/               # Imagens e ativos visuais
│   ├── hero.png          # Imagem de perfil/marca
│   ├── icon-whatsapp.png # Ícone 3D WhatsApp (Sálvia)
│   ├── icon-portfolio.png # Ícone 3D Portfólio (Sálvia)
│   ├── icon-form.png      # Ícone 3D Orçamento (Sálvia)
│   └── icon-facebook.png # Ícone 3D Facebook (Sálvia)
├── index.html            # Estrutura semântica e SEO (pt-BR)
├── index.css             # Estilização luxuosa e responsiva
├── script.js             # Micro-interações e efeitos visuais
└── README.md             # Esta documentação
```

## 🚀 Como Executar

Para visualizar a página localmente, você pode simplesmente abrir o arquivo `index.html` em qualquer navegador ou utilizar um servidor local para melhor performance de carregamento de ativos:

```powershell
# Usando o Node.js/serve
npx serve ./
```

A página é **Mobile-First**, otimizada para ser visualizada principalmente em smartphones através da bio do Instagram.

## 🛠️ Detalhes de Implementação

- **Responsividade**: Layout fluido que se adapta desde telas pequenas até desktops.
- **Micro-animações**: 
  - Animação de entrada escalonada (fade-in) para os elementos.
  - Efeito suave de elevação (hover) nos cards de link.
  - Feedback tátil visual ao clicar (escala dinâmica via JS).
- **SEO**: Meta tags configuradas para representar a MADA Cerimonial em mecanismos de busca.

---

*Documentação gerada por Antigravity (Google DeepMind) em 27 de Março de 2026.*
