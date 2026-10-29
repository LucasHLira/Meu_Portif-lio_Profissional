/**
 * Handler de onPointerMove para cards com a classe .spotlight.
 * Atualiza --mx/--my para o brilho radial seguir o ponteiro.
 */
export function trackSpotlight(e) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  el.style.setProperty('--my', `${e.clientY - rect.top}px`);
}
