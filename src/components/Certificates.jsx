import { certificates } from '../data/resume';
import { FaFilePdf, FaExternalLinkAlt, FaAward } from 'react-icons/fa';

export default function Certificates() {
  return (
    <section id="certificados" className="section">
      <div className="container">
        <h2 className="section-heading reveal">
          <span className="number">04.</span> Certificados
        </h2>

        <div className="cert-grid">
          {certificates.map((cert) => (
            <div className="cert-card reveal" key={cert.id}>
              <div className="cert-image-container">
                {cert.type === 'pdf' ? (
                  <div className="cert-pdf-placeholder">
                    <FaFilePdf className="pdf-icon" />
                    <span>Documento PDF</span>
                  </div>
                ) : (
                  <img src={cert.image} alt={cert.title} className="cert-image" loading="lazy" />
                )}
                
                <div className="cert-overlay">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-view-btn"
                  >
                    Visualizar <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              
              <div className="cert-content">
                <div className="cert-icon-wrapper">
                  <FaAward className="cert-award-icon" />
                </div>
                <div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
