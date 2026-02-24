import tailwindCSS from '@tailwindcss/vite';
import { devtools } from '@tanstack/devtools-vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  server: { host: true },
  envDir: false, // Do not load ".env" files
  plugins: [
    devtools(),
    tsconfigPaths(),
    tanstackStart(),
    viteReact({
      // https://react.dev/learn/react-compiler
      babel: { plugins: ['babel-plugin-react-compiler'] },
    }),
    tailwindCSS(),
  ],
});
