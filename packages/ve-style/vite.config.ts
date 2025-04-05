import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  build: {
    lib: {
      entry: {
        main: resolve(__dirname, 'src/main.ts'),
        common: resolve(__dirname, 'src/common.ts'),
      },
      name: 've-style',
      formats: ['es'],
    },
    sourcemap: true,
    minify: true,
    emptyOutDir: false, // in watch mode if this empties it will throw errors in the browser
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
    }),
    vanillaExtractPlugin(),
  ],
});
