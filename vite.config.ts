import path from 'node:path';
import { defineConfig } from 'vite';
import postcssNesting from 'postcss-nesting';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      strategies: 'injectManifest',
      manifest: {
        name: 'bencasts',
        short_name: 'bencasts',
        description: 'Podcasts by Ben!',
        theme_color: '#3070DD',
        display_override: ['window-controls-overlay',  'minimal-ui'],
        icons: [
          {
            src: '64.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: '192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [
        postcssNesting,
        autoprefixer({}),
      ],
    },
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
