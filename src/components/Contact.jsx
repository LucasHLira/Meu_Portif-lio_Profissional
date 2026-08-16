import { personalInfo } from '../data/resume';
import { FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contato" className="section">
      <div className="container">
        <div className="contact-wrapper">
          <p className="contact-label reveal">06. E agora?</p>
          <h2 className="contact-title reveal">Vamos conversar?</h2>
          <p className="contact-description reveal">
            Estou aberto a novas oportunidades — seja um estágio, freela, ou apenas
            uma troca de ideia sobre tecnologia. Minha caixa de entrada está sempre
            aberta. Se tiver alguma pergunta ou quiser dizer oi, terei o prazer de
            responder!
          </p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="btn btn-primary reveal"
            style={{ display: 'inline-flex', margin: '0 auto' }}
          >
            <FaEnvelope aria-hidden="true" /> Diga Olá
          </a>
        </div>
      </div>
    </section>
  );
}
