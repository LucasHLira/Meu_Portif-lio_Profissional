// ============================================================
// DADOS DO PORTFÓLIO — Lucas Henrique Lira de Souza
// Atualizado com projetos reais do GitHub e dados do currículo
//
// Textos traduzíveis usam { pt, en, es }. Strings simples
// (nomes próprios, tecnologias) são iguais em todos os idiomas.
// ============================================================

export const personalInfo = {
  name: "Lucas Henrique Lira",
  title: {
    pt: "Desenvolvedor de Software & Analista de Dados",
    en: "Software Developer & Data Analyst",
    es: "Desarrollador de Software y Analista de Datos",
  },
  email: "lucashenriqueliradesouza@gmail.com",
  github: "https://github.com/LucasHLira",
  linkedin: "https://www.linkedin.com/in/lucas-henrique-lira-de-souza-747287225/",
  location: {
    pt: "Santos, São Paulo — Brasil",
    en: "Santos, São Paulo — Brazil",
    es: "Santos, São Paulo — Brasil",
  },
  avatarUrl: "/images/lucas-avatar.jpg",
  // Galeria do card "Sobre" (alternam sozinhas). `position` = object-position
  // para manter o rosto no enquadramento. Fotos em 800px de largura.
  photos: [
    {
      src: "/images/lucas.jpg",
      position: "50% 28%",
      caption: "Santos, SP",
      alt: {
        pt: "Lucas Henrique Lira trabalhando no computador",
        en: "Lucas Henrique Lira working at his computer",
        es: "Lucas Henrique Lira trabajando en la computadora",
      },
    },
    {
      src: "/images/lucas-g4-valley.jpg",
      position: "50% 20%",
      caption: "G4 Valley",
      alt: {
        pt: "Lucas Henrique Lira no evento G4 Valley",
        en: "Lucas Henrique Lira at the G4 Valley event",
        es: "Lucas Henrique Lira en el evento G4 Valley",
      },
    },
  ],
  // Parágrafos do "Sobre". **texto** vira negrito.
  bio: {
    pt: [
      "Tenho 19 anos e estou cursando o **4º semestre de Análise e Desenvolvimento de Sistemas na UNIMES** (Universidade Metropolitana de Santos). Hoje atuo como **Desenvolvedor Full Stack na TitanLab**. Antes, fiz parte do **BTP — Brasil Terminal Portuário**, onde atuei na área de TI, o que despertou minha paixão por tecnologia.",
      "Minha trajetória combina experiência prática em comércio exterior com uma transição consistente para o desenvolvimento de software — construindo projetos web reais com **JavaScript, Node.js e React**, além de análise de dados com **SQL, Power BI e Excel**.",
      "Sou uma pessoa analítica e curiosa, que acredita no aprendizado contínuo — no momento, estudando computação em nuvem com **Microsoft Azure**. Já desenvolvi projetos para clientes reais, de landing pages a portfólios e lojas, todos publicados e acessíveis online.",
    ],
    en: [
      "I'm 19 and in the **4th semester of Systems Analysis and Development at UNIMES** (Universidade Metropolitana de Santos). Today I work as a **Full Stack Developer at TitanLab**. Before that, I was part of **BTP — Brasil Terminal Portuário**, working in IT, which sparked my passion for technology.",
      "My path combines hands-on experience in foreign trade with a steady transition into software development — building real web projects with **JavaScript, Node.js and React**, plus data analysis with **SQL, Power BI and Excel**.",
      "I'm analytical and curious, and I believe in continuous learning — right now I'm studying cloud computing with **Microsoft Azure**. I've built projects for real clients, from landing pages to portfolios and store websites, all published and live.",
    ],
    es: [
      "Tengo 19 años y estoy cursando el **4º semestre de Análisis y Desarrollo de Sistemas en UNIMES** (Universidade Metropolitana de Santos). Hoy trabajo como **Desarrollador Full Stack en TitanLab**. Antes formé parte de **BTP — Brasil Terminal Portuário**, donde trabajé en el área de TI, lo que despertó mi pasión por la tecnología.",
      "Mi trayectoria combina experiencia práctica en comercio exterior con una transición sólida al desarrollo de software — construyendo proyectos web reales con **JavaScript, Node.js y React**, además de análisis de datos con **SQL, Power BI y Excel**.",
      "Soy una persona analítica y curiosa, que cree en el aprendizaje continuo — ahora mismo estudiando computación en la nube con **Microsoft Azure**. Ya desarrollé proyectos para clientes reales, desde landing pages hasta portafolios y tiendas, todos publicados y en línea.",
    ],
  },
};

// `icon` indica o ícone quando o nome é traduzido (ver src/data/techIcons.js)
export const skills = [
  // Linguagens
  { name: "JavaScript", level: 80, category: "linguagem" },
  { name: "HTML5 & CSS3", level: 85, category: "linguagem" },
  { name: "TypeScript", level: 55, category: "linguagem" },
  { name: { pt: "Python (básico)", en: "Python (basic)", es: "Python (básico)" }, icon: "Python", level: 40, category: "linguagem" },
  // Frontend
  { name: "React", level: 65, category: "frontend" },
  { name: { pt: "Manipulação do DOM", en: "DOM Manipulation", es: "Manipulación del DOM" }, icon: "DOM Manipulation", level: 80, category: "frontend" },
  // Backend
  { name: "Node.js", level: 70, category: "backend" },
  { name: "Express.js", level: 65, category: "backend" },
  // Dados
  { name: "SQL", level: 75, category: "dados" },
  { name: "Power BI", level: 80, category: "dados" },
  { name: { pt: "Excel Avançado", en: "Advanced Excel", es: "Excel Avanzado" }, icon: "Excel", level: 85, category: "dados" },
  // Ferramentas
  { name: "Git & GitHub", level: 75, category: "ferramentas" },
  { name: "Vercel / Deploy", level: 70, category: "ferramentas" },
];

// Ordem: da mais recente para a mais antiga.
// `start`/`end` em "AAAA-MM" ou "AAAA"; end: null = atual.
export const experiences = [
  {
    role: { pt: "Desenvolvedor Full Stack", en: "Full Stack Developer", es: "Desarrollador Full Stack" },
    company: "TitanLab",
    start: "2026-08",
    end: null,
    description: {
      pt: "Atuo no desenvolvimento de aplicações web de ponta a ponta: no front-end, construindo interfaces, e no back-end, desenvolvendo APIs e integrações.",
      en: "I work on web applications end to end: on the front end, building interfaces, and on the back end, developing APIs and integrations.",
      es: "Trabajo en el desarrollo de aplicaciones web de punta a punta: en el front-end, construyendo interfaces, y en el back-end, desarrollando APIs e integraciones.",
    },
    tech: ["Front-end", "Back-end", "APIs"],
  },
  {
    role: { pt: "Estudante de ADS", en: "Systems Analysis & Development Student", es: "Estudiante de Análisis y Desarrollo de Sistemas" },
    company: "UNIMES — Universidade Metropolitana de Santos",
    start: "2025",
    end: null,
    description: {
      pt: "Cursando o 4º semestre de Análise e Desenvolvimento de Sistemas. Desenvolvendo projetos práticos em JavaScript, Node.js, React, SQL e Banco de Dados, com foco em desenvolvimento full stack e análise de dados.",
      en: "Currently in the 4th semester of Systems Analysis and Development. Building hands-on projects with JavaScript, Node.js, React, SQL and databases, focused on full-stack development and data analysis.",
      es: "Cursando el 4º semestre de Análisis y Desarrollo de Sistemas. Desarrollando proyectos prácticos con JavaScript, Node.js, React, SQL y bases de datos, con enfoque en desarrollo full stack y análisis de datos.",
    },
    tech: [
      "JavaScript", "React", "Node.js", "SQL",
      { pt: "POO", en: "OOP", es: "POO" },
      { pt: "Banco de Dados", en: "Databases", es: "Bases de Datos" },
    ],
  },
  {
    role: { pt: "Assistente de Importação", en: "Import Assistant", es: "Asistente de Importación" },
    company: "Rhadar Logistica Aduaneira",
    start: "2024-11",
    end: "2026-02",
    description: {
      pt: "Atuei no setor de Análise Documental e posteriormente no setor de Follow-up e controle de processos. Além de trabalhar fortemente a organização, tive o privilégio de auxiliar no desenvolvimento de uma automação no envio de Follow-up!",
      en: "Worked in Document Analysis and later in Follow-up and process control. Besides a strong focus on organization, I had the privilege of helping develop an automation for sending follow-up reports!",
      es: "Trabajé en el área de Análisis Documental y luego en Follow-up y control de procesos. Además de reforzar mucho la organización, tuve el privilegio de ayudar a desarrollar una automatización para el envío de follow-ups.",
    },
    tech: [
      "Excel", "Power BI",
      { pt: "Sistemas ERP", en: "ERP Systems", es: "Sistemas ERP" },
      { pt: "Documentação Fiscal", en: "Tax Documentation", es: "Documentación Fiscal" },
    ],
  },
  {
    role: { pt: "Auxiliar de Comércio Exterior / Importação", en: "Foreign Trade / Import Assistant", es: "Auxiliar de Comercio Exterior / Importación" },
    company: "Comexpert",
    start: "2024-08",
    end: "2024-11",
    description: {
      pt: "Atuei como auxiliar de importação. Responsável pelo rastreio (tracking) dos processos e follow-up.",
      en: "Worked as an import assistant, responsible for shipment tracking and process follow-up.",
      es: "Trabajé como auxiliar de importación, responsable del seguimiento (tracking) de los procesos y del follow-up.",
    },
    tech: ["Excel", { pt: "Sistemas ERP", en: "ERP Systems", es: "Sistemas ERP" }],
  },
  {
    role: { pt: "Aprendiz de TI", en: "IT Apprentice", es: "Aprendiz de TI" },
    company: "BTP — Brasil Terminal Portuário",
    start: "2023-03",
    end: "2024-06",
    description: {
      pt: "Atuei no setor de Tecnologia da Informação do BTP com suporte técnico a usuários, manutenção de hardware e desenvolvimento de primeiros projetos de programação.",
      en: "Worked in BTP's IT department providing technical support to users and hardware maintenance, while building my first programming projects.",
      es: "Trabajé en el área de Tecnología de la Información de BTP brindando soporte técnico a usuarios y mantenimiento de hardware, y desarrollando mis primeros proyectos de programación.",
    },
    tech: [
      { pt: "Suporte Técnico", en: "Technical Support", es: "Soporte Técnico" },
      { pt: "Redes", en: "Networking", es: "Redes" },
      "Hardware",
      { pt: "Lógica de Programação", en: "Programming Logic", es: "Lógica de Programación" },
    ],
  },
];

// ============================================================
// CERTIFICADOS E CURSOS
// type: "course" (em andamento) | "image" | "pdf"
// ============================================================
export const certificates = [
  {
    id: 5,
    title: "Introduction to Cloud Infrastructure: Describe cloud concepts",
    issuer: "Microsoft Learn · Azure",
    details: {
      pt: "Learning Path · 3 módulos · 56 min",
      en: "Learning Path · 3 modules · 56 min",
      es: "Learning Path · 3 módulos · 56 min",
    },
    link: {
      pt: "https://learn.microsoft.com/pt-br/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/",
      en: "https://learn.microsoft.com/en-us/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/",
      es: "https://learn.microsoft.com/es-es/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/",
    },
    type: "course",
    inProgress: true,
  },
  {
    id: 1,
    title: { pt: "Power BI Completo", en: "Complete Power BI", es: "Power BI Completo" },
    issuer: { pt: "Certificação em Análise de Dados", en: "Data Analysis Certification", es: "Certificación en Análisis de Datos" },
    image: "/certificados/power-bi.jpg",
    link: "/certificados/power-bi.jpg",
    type: "image",
  },
  {
    id: 2,
    title: { pt: "Redes de Computadores", en: "Computer Networks", es: "Redes de Computadoras" },
    issuer: "Cisco Networking Academy",
    image: "/certificados/redes-cisco.jpg",
    link: "/certificados/redes-cisco.jpg",
    type: "image",
  },
  {
    id: 3,
    title: { pt: "O que é IA Generativa", en: "What Is Generative AI?", es: "¿Qué es la IA generativa?" },
    issuer: "LinkedIn Learning",
    image: "/certificados/gen-ai-linkedin.pdf",
    link: "/certificados/gen-ai-linkedin.pdf",
    type: "pdf",
  },
  {
    id: 4,
    title: "Data Analytics",
    issuer: { pt: "Certificação em Análise de Dados", en: "Data Analysis Certification", es: "Certificación en Análisis de Datos" },
    image: "/certificados/Data_Analytics.pdf",
    link: "/certificados/Data_Analytics.pdf",
    type: "pdf",
  },
];

// ============================================================
// PROJETOS
// Acadêmicos: estudos, cursos, exercícios
// Profissionais: projetos para clientes ou de produto próprio
// private: true = repositório privado (sem link de código)
// type: "web" | "data"
// ============================================================
export const projects = {
  professional: [
    {
      id: "merolamkt",
      title: "Merola Marketing Digital",
      description: {
        pt: "Landing page profissional desenvolvida para uma agência de marketing digital. Design moderno, responsivo e otimizado para conversão. Publicado e hospedado na Vercel.",
        en: "Professional landing page built for a digital marketing agency. Modern, responsive design optimized for conversion. Published and hosted on Vercel.",
        es: "Landing page profesional desarrollada para una agencia de marketing digital. Diseño moderno, responsive y optimizado para la conversión. Publicada y alojada en Vercel.",
      },
      tech: ["HTML", "CSS", "JavaScript"],
      category: "professional",
      type: "web",
      link: "https://merolamkt.vercel.app",
      github: "https://github.com/LucasHLira/merolamkt",
    },
    {
      id: "portifolio-fotografico",
      title: { pt: "Portfólio Fotográfico", en: "Photography Portfolio", es: "Portafolio Fotográfico" },
      description: {
        pt: "Portfólio digital personalizado desenvolvido para um profissional de fotografia. Interface elegante para exibição de galeria de fotos com layout responsivo e visual impactante. Deploy na Vercel.",
        en: "Custom digital portfolio built for a professional photographer. An elegant interface to showcase a photo gallery, with a responsive layout and striking visuals. Deployed on Vercel.",
        es: "Portafolio digital personalizado desarrollado para un profesional de la fotografía. Interfaz elegante para mostrar una galería de fotos, con diseño responsive y un visual impactante. Deploy en Vercel.",
      },
      tech: ["JavaScript", "HTML", "CSS"],
      category: "professional",
      type: "web",
      link: "https://portifolio-fotografico-lilac.vercel.app",
      github: "https://github.com/LucasHLira/Portifolio_Fotografico",
    },
    {
      id: "landing-page-pipolu",
      title: "Landing Page — Pipolu",
      description: {
        pt: "Landing page profissional desenvolvida para cliente real. Design responsivo e otimizado, publicado e acessível na web via Vercel.",
        en: "Professional landing page built for a real client. Responsive, optimized design, published and live on the web via Vercel.",
        es: "Landing page profesional desarrollada para un cliente real. Diseño responsive y optimizado, publicada y accesible en la web a través de Vercel.",
      },
      tech: ["HTML", "CSS", "JavaScript"],
      category: "professional",
      type: "web",
      link: "https://pipolulandingpage.vercel.app",
      github: "https://github.com/LucasHLira/landing-page",
    },
    {
      id: "lynx-acessorios",
      title: "Lynx Acessórios",
      description: {
        pt: "Site para uma marca de acessórios em aço inox para praia e piscina. Vitrine de produtos com pedidos pelo WhatsApp, filtro de pedras por intenção, perguntas frequentes e cadastro para novidades.",
        en: "Website for a brand of stainless steel accessories made for the beach and pool. Product showcase with WhatsApp ordering, a crystal filter by intention, FAQ and a sign-up for new releases.",
        es: "Sitio para una marca de accesorios de acero inoxidable para la playa y la piscina. Vitrina de productos con pedidos por WhatsApp, filtro de piedras por intención, preguntas frecuentes y registro para novedades.",
      },
      tech: ["React", "Vite", "Vercel"],
      category: "professional",
      type: "web",
      link: "https://lynx-acessorios.vercel.app",
      github: null,
      private: true,
    },
    {
      id: "beatriz-silva-storymaker",
      title: "Beatriz Silva — Storymaker",
      description: {
        pt: "Portfólio para uma video maker que grava conteúdo audiovisual para marcas, eventos e casamentos. Seções de trabalhos, serviços e processo, com contato direto pelo WhatsApp.",
        en: "Portfolio for a video maker who films audiovisual content for brands, events and weddings. Work, services and process sections, with direct contact via WhatsApp.",
        es: "Portafolio para una video maker que graba contenido audiovisual para marcas, eventos y bodas. Secciones de trabajos, servicios y proceso, con contacto directo por WhatsApp.",
      },
      tech: ["React", "Vite", "Vercel"],
      category: "professional",
      type: "web",
      link: "https://beatriz-silva-storymaker-v2.vercel.app",
      github: null,
      private: true,
    },
  ],
  academic: [
    {
      id: "buscar-filmes",
      title: { pt: "Buscador de Filmes", en: "Movie Search", es: "Buscador de Películas" },
      description: {
        pt: "Aplicação web que consome uma API gratuita de filmes para busca e exibição de informações. Projeto desenvolvido para estudo de consumo de APIs REST com JavaScript puro.",
        en: "Web app that consumes a free movie API to search and display movie information. Built to practice consuming REST APIs with vanilla JavaScript.",
        es: "Aplicación web que consume una API gratuita de películas para buscar y mostrar información. Proyecto desarrollado para practicar el consumo de APIs REST con JavaScript puro.",
      },
      tech: ["JavaScript", { pt: "API REST", en: "REST API", es: "API REST" }, "HTML", "CSS"],
      category: "academic",
      type: "web",
      link: "https://LucasHLira.github.io/buscar_filmes",
      github: "https://github.com/LucasHLira/buscar_filmes",
    },
    {
      id: "hora-do-dia",
      title: { pt: "Hora do Dia (DOM)", en: "Time of Day (DOM)", es: "Hora del Día (DOM)" },
      description: {
        pt: "Primeiro projeto prático em JavaScript com manipulação de DOM. Exibe uma saudação dinâmica (bom dia, boa tarde, boa noite) baseada no horário atual do usuário.",
        en: "My first hands-on JavaScript project with DOM manipulation. Shows a dynamic greeting (good morning, good afternoon, good evening) based on the user's current time.",
        es: "Primer proyecto práctico en JavaScript con manipulación del DOM. Muestra un saludo dinámico (buenos días, buenas tardes, buenas noches) según la hora actual del usuario.",
      },
      tech: ["JavaScript", "HTML", "CSS", "DOM"],
      category: "academic",
      type: "web",
      link: null,
      github: "https://github.com/LucasHLira/hora_do_dia",
    },
    {
      id: "verificador-idade",
      title: { pt: "Verificador de Idade", en: "Age Checker", es: "Verificador de Edad" },
      description: {
        pt: "Aplicação JavaScript com manipulação de DOM para verificação de faixa etária. Desenvolvido em conjunto com curso de JavaScript para praticar lógica e interação com o usuário.",
        en: "JavaScript app with DOM manipulation that checks a person's age group. Built alongside a JavaScript course to practice logic and user interaction.",
        es: "Aplicación en JavaScript con manipulación del DOM para verificar el rango de edad. Desarrollada junto con un curso de JavaScript para practicar lógica e interacción con el usuario.",
      },
      tech: ["JavaScript", "HTML", "CSS", "DOM"],
      category: "academic",
      type: "web",
      link: null,
      github: "https://github.com/LucasHLira/Verificador_de_Idade",
    },
    {
      id: "curriculo-site",
      title: { pt: "Currículo em Formato de Site", en: "Résumé as a Website", es: "Currículum en Formato Web" },
      description: {
        pt: "Modelo do currículo pessoal desenvolvido em formato de site web. Inclui modo escuro, download do currículo em PDF e layout responsivo com Bootstrap.",
        en: "My personal résumé built as a website. Includes dark mode, PDF résumé download and a responsive layout with Bootstrap.",
        es: "Mi currículum personal en formato de sitio web. Incluye modo oscuro, descarga del currículum en PDF y diseño responsive con Bootstrap.",
      },
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      category: "academic",
      type: "web",
      link: null,
      github: "https://github.com/LucasHLira/Curriculo_Site_Lucas_Lira",
    },
  ],
  dashboard: [
    {
      id: "dashboard-rh",
      title: { pt: "Dashboard RH", en: "HR Dashboard", es: "Dashboard de RR. HH." },
      description: {
        pt: "Dashboard feito para fins acadêmicos com base de dados fictícia, simulando um dashboard de Recursos Humanos.",
        en: "Dashboard built for academic purposes with a fictional dataset, simulating a Human Resources dashboard.",
        es: "Dashboard creado con fines académicos a partir de una base de datos ficticia, simulando un dashboard de Recursos Humanos.",
      },
      tech: ["Power BI", { pt: "Análise de Dados", en: "Data Analysis", es: "Análisis de Datos" }],
      category: "dashboard",
      type: "data",
      link: null,
      github: "https://github.com/LucasHLira/Dashboard_Aula_RH",
    },
    {
      id: "dashboard-transporte",
      title: { pt: "Dashboard de Controle de Transporte", en: "Transport Control Dashboard", es: "Dashboard de Control de Transporte" },
      description: {
        pt: "Dashboard para fins acadêmicos, feito com base de dados fictícia, simulando um dashboard para controle de transporte.",
        en: "Academic dashboard built with a fictional dataset, simulating a transport control dashboard.",
        es: "Dashboard con fines académicos, hecho con una base de datos ficticia, simulando un dashboard de control de transporte.",
      },
      tech: ["Power BI", { pt: "Análise de Dados", en: "Data Analysis", es: "Análisis de Datos" }],
      category: "dashboard",
      type: "data",
      link: null,
      github: "https://github.com/LucasHLira/Dashboard_Controle_de_Transporte",
    },
    {
      id: "dashboard-metas",
      title: { pt: "Dashboard de Metas e Resultados", en: "Goals & Results Dashboard", es: "Dashboard de Metas y Resultados" },
      description: {
        pt: "Dashboard para fins acadêmicos, simulando um dashboard com KPIs e indicadores de metas e resultados.",
        en: "Academic dashboard simulating KPIs and goal and results indicators.",
        es: "Dashboard con fines académicos que simula KPIs e indicadores de metas y resultados.",
      },
      tech: ["Power BI", { pt: "Análise de Dados", en: "Data Analysis", es: "Análisis de Datos" }],
      category: "dashboard",
      type: "data",
      link: null,
      github: "https://github.com/LucasHLira/Dashboard_Metas_e_Resultados",
    },
  ],
};

export const githubStats = {
  username: "LucasHLira",
  profileUrl: "https://github.com/LucasHLira",
  publicRepos: 10,
};
