import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'Icon sizes',
        short_name: 'Icon sizes',
        theme_color: '#242424',
        background_color: '#242424',
        description: 'Test what size icon is rendered by your browser and other system applications.',
        icons: [
          {
            src: '16x16.png',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            src: '24x24.png',
            sizes: '24x24',
            type: 'image/png',
          },
          {
            src: '32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
          {
            src: '48x48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: '64x64.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: '128x128.png',
            sizes: '128x128',
            type: 'image/png',
          },
          {
            src: '256x256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: '512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '1024x1024.png',
            sizes: '1024x1024',
            type: 'image/png',
          },
          {
            src: '16x16-inverted.svg',
            sizes: '16x16',
            type: 'image/svg+xml',
          },
          {
            src: '24x24-inverted.svg',
            sizes: '24x24',
            type: 'image/svg+xml',
          },
          {
            src: '32x32-inverted.svg',
            sizes: '32x32',
            type: 'image/svg+xml',
          },
          {
            src: '48x48-inverted.svg',
            sizes: '48x48',
            type: 'image/svg+xml',
          },
          {
            src: '64x64-inverted.svg',
            sizes: '64x64',
            type: 'image/svg+xml',
          },
          {
            src: '128x128-inverted.svg',
            sizes: '128x128',
            type: 'image/svg+xml',
          },
          {
            src: '256x256-inverted.svg',
            sizes: '256x256',
            type: 'image/svg+xml',
          },
          {
            src: '512x512-inverted.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          },
          {
            src: '1024x1024-inverted.svg',
            sizes: '1024x1024',
            type: 'image/svg+xml',
          },
        ],
      },
    }),
  ],
})
