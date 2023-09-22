import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

const pathResolve = (dir) => {
  return resolve(__dirname, '.', dir);
};

// https://vitejs.dev/config/
const viteConfig = defineConfig((mode) => {
  const env = loadEnv(mode.mode, process.cwd());
  console.log('vite.config.js:env----', env);
  console.log('vite.config.js:mode----', mode);
  return {
    base: mode.command === 'serve' ? './' : env.VITE_PUBLIC_PATH,
    root: process.cwd(),
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
