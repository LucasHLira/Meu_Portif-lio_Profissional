import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import conteudoParaRobos from './scripts/conteudo-para-robos.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), conteudoParaRobos()],
})
