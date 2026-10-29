import { useEffect, useState } from 'react';
import { FiMapPin } from 'react-icons/fi';
import useLanguage from '../i18n/useLanguage';

const INTERVAL_MS = 5000;

/**
 * Card de fotos do "Sobre": troca sozinho com crossfade.
 * Pausa com o ponteiro/foco em cima, para de vez quando o visitante
 * escolhe uma foto e não anima com prefers-reduced-motion.
 */
export default function PhotoGallery({ photos }) {
  const { t, tr } = useLanguage();
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!autoplay || paused || photos.length < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % photos.length), INTERVAL_MS);
    return () => clearInterval(timer);
  }, [autoplay, paused, photos.length]);

  const select = (i) => {
    setIndex(i);
    setAutoplay(false);
  };

  return (
    <figure
      className="card bento-photo reveal"
      style={{ '--d': '80ms' }}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {photos.map((photo, i) => (
        <img
          key={photo.src}
          src={photo.src}
          alt={tr(photo.alt)}
          aria-hidden={i !== index || undefined}
          className={i === index ? 'is-active' : undefined}
          style={{ objectPosition: photo.position }}
          loading="lazy"
        />
      ))}

      <figcaption className="photo-caption">
        <FiMapPin aria-hidden="true" /> {photos[index].caption}
      </figcaption>

      {photos.length > 1 && (
        <div className="photo-dots">
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              className={`photo-dot${i === index ? ' is-active' : ''}`}
              aria-label={t('about.photoNav', { n: i + 1, total: photos.length })}
              aria-pressed={i === index}
              onClick={() => select(i)}
            />
          ))}
        </div>
      )}
    </figure>
  );
}
