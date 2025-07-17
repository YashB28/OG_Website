import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/OG_Website/',  // ← important!
  plugins: [react()],
});
