/// <reference types="vitest"/> 

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Activa las funciones globales como describe, it, expect
    environment: 'jsdom', // Usa jsdom para simular un navegador
    setupFiles: './src/setupTest.ts', // Archivo para la configuración global de los tests
    css: true,
  }
});