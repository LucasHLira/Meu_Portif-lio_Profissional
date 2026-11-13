# Portfólio — Lucas Henrique Lira

Portfólio pessoal de Lucas Henrique Lira, Desenvolvedor de Software e Analista de Dados.

Site no ar: https://portifolio-lucas-lira.vercel.app

## Seções do site

- **Início** — apresentação, com animação de entrada
- **Faixa de tecnologias** — os ícones das tecnologias em movimento
- **Sobre** — bio e galeria de fotos
- **Projetos** — em três abas: profissionais, acadêmicos e dashboards
- **Habilidades** — por categoria
- **Experiência** — a trajetória profissional
- **Certificados** — certificações e cursos
- **Contato** — botão de e-mail e links do GitHub e do LinkedIn
- **Rodapé** — links do GitHub, do LinkedIn e de e-mail, e o botão de voltar ao topo

## Idiomas

O site está em três idiomas: português, inglês e espanhol. A troca é feita pelo seletor de idioma no menu.

## Tecnologias

- [React](https://react.dev) 19
- [Vite](https://vite.dev) 8
- [React Icons](https://react-icons.github.io/react-icons/)
- [Oxlint](https://oxc.rs) para o lint

## Como rodar

```bash
npm ci            # instala as dependências
npm run dev       # servidor local (localhost:5173)
npm run build     # gera a pasta dist/ para produção
npm run lint      # roda o lint (oxlint)
npm run preview   # mostra o build de produção localmente
```

## Pastas de `src/`

```
src/
  assets/        imagens (hero.png) e ícones
  components/    componentes React (Hero, About, Projects, Skills, ...)
  data/          dados do portfólio (resume.js, techIcons.js)
  hooks/         hooks próprios (useTheme, useActiveSection, useCounter)
  i18n/          os três idiomas (translations.js, LanguageProvider, useLanguage)
  lib/           utilitários (spotlight.js)
  App.jsx        componente raiz
  main.jsx       ponto de entrada
  index.css      estilos e animações
```
