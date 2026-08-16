import { useRef } from 'react';

/**
 * Retorna uma ref para ser passada a um elemento.
 * O App.jsx tem um observer global que aplica .visible a TODOS os .reveal.
 * Este hook apenas garante que o elemento tenha a classe .reveal ao montar.
 */
export default function useReveal() {
  const ref = useRef(null);
  // A classe .reveal é aplicada via JSX diretamente nos componentes
  // O observer global em App.jsx cuida de adicionar .visible
  return ref;
}
