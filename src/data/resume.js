// ============================================================
// DADOS DO PORTFÓLIO — Lucas Henrique Lira de Souza
// Atualizado com projetos reais do GitHub e dados do currículo
// ============================================================

export const personalInfo = {
  name: "Lucas Henrique Lira",
  title: "Desenvolvedor de Software & Analista de Dados",
  tagline: "Transformando dados em decisões e código em soluções.",
  email: "lucashenriqueliradesouza@gmail.com",
  github: "https://github.com/LucasHLira",
  linkedin: "https://www.linkedin.com/in/lucas-henrique-lira-de-souza-747287225/",
  location: "Santos, São Paulo — Brasil",
  avatarUrl: "https://avatars.githubusercontent.com/u/107896027?v=4",
  about: `Tenho 19 anos, cursando o 4º Semestre de Análise e Desenvolvimento de Sistemas na UNIMES. Já fiz parte do CAMPS, onde comecei sendo aprendiz de TI durante 1 ano e 3 meses. Sou uma pessoa analítica, curiosa e sempre em busca de aprendizado contínuo.\n\nMinha trajetória combina experiência em comércio exterior com uma transição sólida para a área de tecnologia — desenvolvendo projetos web reais com JavaScript, Node.js e React, além de análise de dados com SQL, Power BI e Excel.`,
};

export const skills = [
  // Linguagens
  { name: "JavaScript", level: 80, category: "linguagem" },
  { name: "HTML5 & CSS3", level: 85, category: "linguagem" },
  { name: "TypeScript", level: 55, category: "linguagem" },
  { name: "Python (básico)", level: 40, category: "linguagem" },
  // Frontend
  { name: "React", level: 65, category: "frontend" },
  { name: "DOM Manipulation", level: 80, category: "frontend" },
  // Backend
  { name: "Node.js", level: 70, category: "backend" },
  { name: "Express.js", level: 65, category: "backend" },
  // Dados
  { name: "SQL", level: 75, category: "dados" },
  { name: "Power BI", level: 80, category: "dados" },
  { name: "Excel Avançado", level: 85, category: "dados" },
  // Ferramentas
  { name: "Git & GitHub", level: 75, category: "ferramentas" },
  { name: "Vercel / Deploy", level: 70, category: "ferramentas" },
];

export const experiences = [
  {
    role: "Estudante de ADS",
    company: "UNIMES — Universidade Metropolitana de Santos",
    period: "2025 — Presente",
    description:
      "Cursando o 4º Semestre de Análise e Desenvolvimento de Sistemas. Desenvolvendo projetos práticos em JavaScript, Node.js, React, SQL e Banco de Dados, com foco em desenvolvimento full stack e análise de dados.",
    tech: ["JavaScript", "React", "Node.js", "SQL", "POO", "Banco de Dados"],
  },
  {
    role: "Aprendiz de TI",
    company: "BTP — Brasil Terminal Portuário",
    period: "Mar/2023 — Jun/2024",
    description:
      "Atuei no setor de Tecnologia da Informação do BTP com suporte técnico a usuários, manutenção de hardware e desenvolvimento de primeiros projetos de programação.",
    tech: ["Suporte Técnico", "Redes", "Hardware", "Lógica de Programação"],
  },
  {
    role: "Auxiliar de Comércio Exterior / Importação",
    company: "Comexpert",
    period: "Ago/2024 — Nov/2024",
    description:
      "Atuei como auxiliar de importação. Responsável pelo rastreio (Tracking) dos processos e follow Up.",
    tech: ["Excel", "Sistemas ERP"],
  },
  {
    role: "Assistente de Importação",
    company: "Rhadar Logistica Aduaneira",
    period: "Nov/2024 — Fev/2026",
    description:
      "Atuei no setor de Analise Documental e posteriormente no setor de Follow UP e controle de processos. Além de trabalhar fortemente a organização, tive o privilegio de auxiliar no desenvolvimento de uma automação no envio de Follow UP!",
    tech: ["Excel", "Power BI", "Sistemas ERP", "Documentação Fiscal"],
  }

];

// ============================================================
// CERTIFICADOS
// ============================================================
export const certificates = [
  {
    id: 1,
    title: "Power BI Completo",
    issuer: "Certificação em Análise de Dados",
    image: "/certificados/power-bi.jpg",
    link: "/certificados/power-bi.jpg",
    type: "image"
  },
  {
    id: 2,
    title: "Redes de Computadores",
    issuer: "Cisco Networking Academy",
    image: "/certificados/redes-cisco.jpg",
    link: "/certificados/redes-cisco.jpg",
    type: "image"
  },
  {
    id: 3,
    title: "O que é IA Generativa",
    issuer: "LinkedIn Learning",
    image: "/certificados/gen-ai-linkedin.pdf", // We'll show a fallback icon/style for PDF
    link: "/certificados/gen-ai-linkedin.pdf",
    type: "pdf"
  }
];

// ============================================================
// PROJETOS REAIS DO GITHUB
// Acadêmicos: estudos, cursos, exercícios
// Profissionais: projetos para clientes ou de produto próprio
// ============================================================
export const projects = {
  professional: [
    {
      id: "merolamkt",
      title: "Merola Marketing Digital",
      description:
        "Landing Page profissional desenvolvida para uma Agência de Marketing Digital. Design moderno, responsivo e otimizado para conversão. Publicado e hospedado na Vercel.",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "professional",
      type: "web",
      link: "https://merolamkt.vercel.app",
      github: "https://github.com/LucasHLira/merolamkt",
      featured: true,
    },
    {
      id: "portifolio-fotografico",
      title: "Portfólio Fotográfico",
      description:
        "Portfólio digital personalizado desenvolvido para um profissional de fotografia. Interface elegante para exibição de galeria de fotos com layout responsivo e visual impactante. Deploy na Vercel.",
      tech: ["JavaScript", "HTML", "CSS"],
      category: "professional",
      type: "web",
      link: "https://portifolio-fotografico-lilac.vercel.app",
      github: "https://github.com/LucasHLira/Portifolio_Fotografico",
      featured: true,
    },
    {
      id: "landing-page-pipolu",
      title: "Landing Page — Pipolu",
      description:
        "Landing page profissional desenvolvida para cliente real. Design responsivo e otimizado, publicado e acessível na web via Vercel.",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "professional",
      type: "web",
      link: "https://pipolulandingpage.vercel.app",
      github: "https://github.com/LucasHLira/landing-page",
      featured: true,
    },
  ],
  academic: [
    {
      id: "buscar-filmes",
      title: "Buscador de Filmes",
      description:
        "Aplicação web que consome uma API gratuita de filmes para busca e exibição de informações. Projeto desenvolvido para estudo de consumo de APIs REST com JavaScript puro.",
      tech: ["JavaScript", "API REST", "HTML", "CSS"],
      category: "academic",
      type: "web",
      link: "https://LucasHLira.github.io/buscar_filmes",
      github: "https://github.com/LucasHLira/buscar_filmes",
      featured: true,
    },
    {
      id: "hora-do-dia",
      title: "Hora do Dia (DOM)",
      description:
        "Primeiro projeto prático em JavaScript com manipulação de DOM. Exibe uma saudação dinâmica (bom dia, boa tarde, boa noite) baseada no horário atual do usuário.",
      tech: ["JavaScript", "HTML", "CSS", "DOM"],
      category: "academic",
      type: "web",
      link: null,
      github: "https://github.com/LucasHLira/hora_do_dia",
      featured: true,
    },
    {
      id: "verificador-idade",
      title: "Verificador de Idade",
      description:
        "Aplicação JavaScript com manipulação de DOM para verificação de faixa etária. Desenvolvido em conjunto com curso de JavaScript para praticar lógica e interação com o usuário.",
      tech: ["JavaScript", "HTML", "CSS", "DOM"],
      category: "academic",
      type: "web",
      link: null,
      github: "https://github.com/LucasHLira/Verificador_de_Idade",
      featured: false,
    },
    {
      id: "curriculo-site",
      title: "Currículo em Formato de Site",
      description:
        "Modelo do currículo pessoal desenvolvido em formato de site web. Inclui modo escuro, download do currículo em PDF e layout responsivo com Bootstrap.",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      category: "academic",
      type: "web",
      link: null,
      github: "https://github.com/LucasHLira/Curriculo_Site_Lucas_Lira",
      featured: false,
    },
  ],
};

export const githubStats = {
  username: "LucasHLira",
  avatarUrl: "https://avatars.githubusercontent.com/u/107896027?v=4",
  profileUrl: "https://github.com/LucasHLira",
  publicRepos: 7,
};
