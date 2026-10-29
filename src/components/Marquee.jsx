import { getTechIcon } from '../data/techIcons';

const ITEMS = [
  'JavaScript', 'TypeScript', 'React', 'Node.js',
  'Express.js', 'HTML5', 'CSS3', 'SQL',
  'Power BI', 'Excel', 'Python', 'Git',
  'GitHub', 'Vite', 'Vercel',
];

export default function Marquee() {
  // Lista duplicada para o loop ficar contínuo
  const all = [...ITEMS, ...ITEMS];

  return (
    <div className="tech-strip" aria-hidden="true">
      <div className="tech-track">
        {all.map((name, i) => {
          const Icon = getTechIcon(name);
          return (
            <span key={i} className="tech-item">
              <Icon />
              {name}
            </span>
          );
        })}
      </div>
    </div>
  );
}
