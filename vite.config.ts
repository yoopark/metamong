import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import path from 'path';

const alias = [{ find: '@', replacement: path.resolve(__dirname, 'src') }];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts(), vanillaExtractPlugin()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'metamong',
      fileName: 'index',
    },
  },
  resolve: {
    alias,
  },
});
