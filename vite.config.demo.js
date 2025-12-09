import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: '/swiss-flag-vue/',
  build: {
    outDir: 'dist-demo'
  }
});
