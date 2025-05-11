import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: process.cwd(), // Make sure current dir is root
  build: {
    outDir: 'dist', // Output folder
    emptyOutDir: true,
  },
});