import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

const pathResolve = (dir) => {
  return resolve(__dirname, '.', dir);
};

// https://vitejs.dev/config/
const viteConfig = defineConfig((mode) => {
  const env = loadEnv(mode.mode, process.cwd());
  console.log('vite.config.js:env----', env);
  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': pathResolve('./src'),
        '/@': pathResolve('./src'),
      },
    },
  };
});
export default viteConfig;
