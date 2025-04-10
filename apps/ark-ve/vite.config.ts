import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  plugins: [react(), vanillaExtractPlugin()],
});
