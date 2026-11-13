# Portfolio — Lucas Henrique Lira

Portfolio pessoal de Lucas Henrique Lira, Desenvolvedor de Software e Analista de Dados.

Site no ar: https://portifolio-lucas-lira.vercel.app

## Secoes do site

- **Hero** — apresentacao com animacao de fundo
- **Marquee** — faixa de tecnologias em movimento
- **Sobre** — bio e galeria de fotos
- **Projetos** — abas de projetos academicos e profissionais, com integracao ao GitHub
- **Habilidades** — barras animadas por categoria
- **Experiencia** — linha do tempo vertical
- **Certificados** — certificacoes e cursos
- **Contato** — formulario e links de redes sociais
- **Footer** — rodape com links fixos

## Idiomas

O site esta disponivel em tres idiomas: Portugues, English e Espanol. A troca e feita pelo seletor de idioma no cabecalho.

## Tecnologias

- [React](https://react.dev) 19
- [Vite](https://vite.dev) 8
- [React Icons](https://react-icons.github.io/react-icons/)
- [OxLint](https://oxc.rs) para linting

## Como rodar

```bash
npm ci            # instala as dependencias
npm run dev       # servidor local (localhost:5173)
npm run build     # gera a pasta dist/ para producao
npm run lint      # roda o linter (oxlint)
npm run preview   # pre-visualiza o build de producao
```

## Estrutura de pastas (src/)

```
src/
  assets/        — imagens e icones estaticos
  components/    — componentes React (Hero, About, Projects, Skills, etc.)
  data/          — dados do portfolio (resume.js, techIcons.js)
  hooks/         — hooks customizados (useTheme, useActiveSection, useCounter)
  i18n/          — internacionalizacao (translations.js, LanguageProvider, useLanguage)
  lib/           — utilitarios (spotlight.js)
  App.jsx        — componente raiz
  main.jsx       — ponto de entrada
  index.css      — design system (tokens, animacoes, tipografia)
```
