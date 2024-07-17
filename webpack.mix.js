const mix = require('laravel-mix');
const { VitePlugin } = require('vite');

mix.extend('vite', new VitePlugin());

mix.vite()
  .js('resources/js/app.js', 'public/js')
  // .postCss('resources/css/app.css', 'public/css', [
  //   //
  // ]);