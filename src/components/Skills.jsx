import { useEffect, useRef } from 'react';
import { skills } from '../data/resume';
import {
  FaCode,
  FaPalette,
  FaServer,
  FaChartBar,
  FaTools,
} from 'react-icons/fa';

const categories = [
  { key: 'linguagem',   label: 'Linguagens',        Icon: FaCode      },
  { key: 'frontend',    label: 'Frontend',           Icon: FaPalette   },
  { key: 'backend',     label: 'Backend',            Icon: FaServer    },
  { key: 'dados',       label: 'Dados & Analytics',  Icon: FaChartBar  },
  { key: 'ferramentas', label: 'Ferramentas',        Icon: FaTools     },
];

function SkillBar({ skill }) {
  const barRef = useRef(null);

  useEffect(() => {
    if (!barRef.current) return;
    const bar = barRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            bar.style.width = `${skill.level}%`;
          }, 150);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(bar.closest('.skill-category-card') || bar);
    return () => observer.disconnect();
  }, [skill.level]);

  return (
    <div className="skill-item">
      <div className="skill-header">
        <span>{skill.name}</span>
        <span className="skill-level">{skill.level}%</span>
      </div>
      <div className="skill-bar-bg">
        <div className="skill-bar-fill" ref={barRef} style={{ width: '0%' }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="habilidades" className="section">
      <div className="container">
        <h2 className="section-heading reveal">
          <span className="number">02.</span> Habilidades
        </h2>

        <div className="skills-grid">
          {categories.map((cat) => {
            const catSkills = skills.filter((s) => s.category === cat.key);
            if (!catSkills.length) return null;
            return (
              <div className="skill-category-card reveal" key={cat.key}>
                <div className="skill-category-title">
                  <cat.Icon aria-hidden="true" />
                  &nbsp;{cat.label}
                </div>
                {catSkills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
