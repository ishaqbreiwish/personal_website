import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcss from './postcss.config.mjs';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss,
  },
});
