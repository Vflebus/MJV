// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/image',
  ],
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  build: {
    transpile: ['gsap']
  }
})
