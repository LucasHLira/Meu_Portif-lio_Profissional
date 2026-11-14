// Conteúdo para quem não roda JavaScript — robôs de IA (GPTBot, ClaudeBot, PerplexityBot...) e
// qualquer leitor que pega só o HTML. O site é montado pelo React no navegador; sem isto, o HTML
// que o robô recebe é só <div id="root"></div>, uma caixa vazia.
//
// Na hora do build, este plugin do Vite lê os MESMOS dados do site, em português
// (src/data/resume.js e src/i18n/translations.js), e escreve no index.html:
//   1. dentro do #root, o essencial em HTML simples. Quem tem JavaScript não vê (o index.html
//      esconde com a classe .js) e o React troca tudo ao montar; quem não tem, lê o texto;
//   2. no <head>, a ficha Person em JSON-LD (schema.org), que diz quem é o dono do site.
//
// Nada de fato é digitado aqui: todo nome, cargo, projeto e link vem dos arquivos de dados.
// O endereço do site é o do campo "homepage" do repositório no GitHub.

import { personalInfo, experiences, projects, skills, certificates } from '../src/data/resume.js'
import { translations } from '../src/i18n/translations.js'

export const SITE = 'https://portifolio-lucas-lira.vercel.app'

const t = translations.pt
const tr = (v) => (v && typeof v === 'object' && !Array.isArray(v) ? (v.pt ?? '') : (v ?? ''))
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const semMarcas = (s) => String(s).replace(/\*\*(.+?)\*\*/g, '$1') // o site usa **negrito** no texto
const texto = (v) => esc(semMarcas(tr(v)))
const paragrafos = (v) => [].concat(tr(v) || []).map((p) => `<p>${esc(semMarcas(p))}</p>`).join('')
const link = (href, rotulo) => (href ? ` <a href="${esc(tr(href))}">${esc(rotulo)}</a>` : '')

export function conteudoEstatico() {
  const p = personalInfo
  const foco = (t.about.focusItems || []).map((f) => `<li><strong>${texto(f.title)}</strong>: ${texto(f.text)}</li>`).join('')
  const trajetoria = experiences
    .map((e) => `<li><strong>${texto(e.role)}</strong> — ${texto(e.company)} (${esc(e.start)} – ${esc(e.end ?? t.experience.present)}). ${texto(e.description)}</li>`)
    .join('')
  const blocosProjetos = Object.entries(projects)
    .map(([categoria, lista]) => {
      const itens = lista
        .map((pr) => `<li><strong>${texto(pr.title)}</strong>: ${texto(pr.description)}${link(pr.link, 'site')}${link(pr.github, 'código')}</li>`)
        .join('')
      return `<h3>${texto(t.projects.tabs?.[categoria] ?? categoria)}</h3><ul>${itens}</ul>`
    })
    .join('')
  const habilidades = skills.map((s) => `<li>${texto(s.name)}</li>`).join('')
  const certificados = certificates.map((c) => `<li>${texto(c.title)} — ${texto(c.issuer)}${link(c.link, 'ver')}</li>`).join('')
  const contato = [
    p.email && `<li><a href="mailto:${esc(p.email)}">${esc(p.email)}</a></li>`,
    p.github && `<li><a href="${esc(p.github)}">GitHub</a></li>`,
    p.linkedin && `<li><a href="${esc(p.linkedin)}">LinkedIn</a></li>`,
    p.instagram && `<li><a href="${esc(p.instagram)}">Instagram</a></li>`,
  ].filter(Boolean).join('')

  return `<div class="conteudo-estatico" lang="pt-BR">`
    + `<h1>${texto(p.name)}</h1><p>${texto(p.title)} · ${texto(p.location)}</p>`
    + `<h2>Sobre</h2>${paragrafos(p.bio)}<h3>${texto(t.about.focus)}</h3><ul>${foco}</ul>`
    + `<h2>Experiência</h2><ul>${trajetoria}</ul>`
    + `<h2>Projetos</h2>${blocosProjetos}`
    + `<h2>Habilidades</h2><ul>${habilidades}</ul>`
    + `<h2>Certificados</h2><ul>${certificados}</ul>`
    + `<h2>Contato</h2><ul>${contato}</ul>`
    + `</div>`
}

export function fichaPessoa() {
  const p = personalInfo
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: tr(p.name),
    jobTitle: tr(p.title),
    url: `${SITE}/`,
    image: `${SITE}${p.avatarUrl}`,
    email: `mailto:${p.email}`,
    homeLocation: { '@type': 'Place', name: tr(p.location) },
    sameAs: [p.github, p.linkedin, p.instagram].filter(Boolean),
    knowsAbout: skills.map((s) => tr(s.name)),
  }
}

export default function conteudoParaRobos() {
  return {
    name: 'conteudo-para-robos',
    transformIndexHtml(html) {
      if (!html.includes('<div id="root"></div>')) {
        throw new Error('conteudo-para-robos: <div id="root"></div> não está no index.html — o texto para os robôs não foi escrito')
      }
      const ld = JSON.stringify(fichaPessoa()).replace(/</g, '\\u003c')
      return html
        .replace('<div id="root"></div>', `<div id="root">${conteudoEstatico()}</div>`)
        .replace('</head>', `  <script type="application/ld+json">${ld}</script>\n  </head>`)
    },
  }
}
