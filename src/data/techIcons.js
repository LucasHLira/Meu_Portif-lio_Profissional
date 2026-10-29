import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiHtml5,
  SiCss,
  SiPython,
  SiGit,
  SiGithub,
  SiVite,
  SiVercel,
} from 'react-icons/si';
import { TbSql, TbChartBar } from 'react-icons/tb';
import { PiMicrosoftExcelLogo } from 'react-icons/pi';
import { FiCode, FiLayers } from 'react-icons/fi';

// Ícone por nome de tecnologia (usado na faixa de tecnologias e em Habilidades)
export const TECH_ICONS = {
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'React': SiReact,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  'HTML5': SiHtml5,
  'CSS3': SiCss,
  'HTML5 & CSS3': SiHtml5,
  'Python': SiPython,
  'Python (básico)': SiPython,
  'SQL': TbSql,
  'Power BI': TbChartBar,
  'Excel': PiMicrosoftExcelLogo,
  'Excel Avançado': PiMicrosoftExcelLogo,
  'Git': SiGit,
  'GitHub': SiGithub,
  'Git & GitHub': SiGithub,
  'Vite': SiVite,
  'Vercel': SiVercel,
  'Vercel / Deploy': SiVercel,
  'DOM Manipulation': FiLayers,
};

export const getTechIcon = (name) => TECH_ICONS[name] ?? FiCode;
