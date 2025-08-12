// vite.config.js

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer'; // 1. 导入插件

export default defineConfig({
  plugins: [
    vue(),
    
    visualizer({
      open: true, // 在默认浏览器中自动打开报告
      gzipSize: true, // 显示 gzip 后的大小
      brotliSize: true, // 显示 brotli 后的大小
      filename: 'dist/stats.html', // 分析报告输出的文件名
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true
  }
});