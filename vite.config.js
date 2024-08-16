const defineConfig = require('vite').defineConfig;
const postcss = require('./postcss.config.js');
const react = require('@vitejs/plugin-react');


module.exports = {
  define: {
    'process.env': process.env
  },
  root: '.',
  css: {
    postcss,
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
    ],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  } 
};
