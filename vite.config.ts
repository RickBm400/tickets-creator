// @ts-ignore
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8081,
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
          @use "@/sass/_styles.sass" as *
        `,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
