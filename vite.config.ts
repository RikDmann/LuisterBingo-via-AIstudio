import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// BELANGRIJK: Vervang 'luisterbingo' door de exacte naam van je repository op GitHub
export default defineConfig({
  plugins: [react()],
  base: '/luisterbingo/', 
});
