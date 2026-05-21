import { defineConfig } from 'minista'
import { resolve } from 'path'

export default defineConfig({
  public: 'static',
  base: process.env.NODE_ENV === 'production' ? '/oberon/' : '/',
  assets: {
    icons: { srcDir: '' },
    entry: [
      'src/main.js', 
      'src/main.scss',
    ],
  },

  resolve: {
    alias: [
      { find: '@pages', replacement: resolve(process.cwd(), './src/pages') },
      { find: '@modules', replacement: resolve(process.cwd(), './src/modules') },
      { find: '@components', replacement: resolve(process.cwd(), './src/components') },
      { find: '@helpers', replacement: resolve(process.cwd(), './src/helpers') },
      { find: '@ui', replacement: resolve(process.cwd(), './src/ui') },
      { find: '@', replacement: resolve(process.cwd(), './src') },
    ],
  },

  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [resolve(process.cwd(), './src')],
        loadPaths: [resolve(process.cwd(), './src')], 
      },
    },
  },

  vite: {
    server: { open: 'pages/' }
  }
})