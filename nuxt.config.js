import getSiteMeta from './utilities/getSiteMeta'

const meta = getSiteMeta()

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // ssr: false,

  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sterling Raspe | 2020/09/08\u20142021/05/11 | sterlingstrong.life',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      ...meta
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Halant:wght@400;700&family=Pacifico&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/scss/app.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    'moment',
    'vue-scrollto/nuxt'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'vue-plausible'
  ],

  plausible: {
    trackLocalhost: true,
    domain: 'sterlingstrong.life'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
