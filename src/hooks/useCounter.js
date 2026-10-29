import { useEffect, useRef } from 'react';

/**
 * useCounter — animates a number from 0 to `target` when the ref element enters the viewport.
 * Returns a ref to attach to the DOM element that will display the number.
 */
export default function useCounter(target, duration = 1400) {
  const elRef = useRef(null);
  const ran = useRef(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !ran.current) {
          ran.current = true;
          const start = performance.now();
          const isFloat = String(target).includes('.');
          const numericTarget = parseFloat(target);
          const suffix = String(target).replace(/[\d.]/g, ''); // e.g. "+", "°", ""

          const tick = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutExpo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const value = numericTarget * eased;
            el.textContent = (isFloat ? value.toFixed(1) : Math.floor(value)) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return elRef;
}
