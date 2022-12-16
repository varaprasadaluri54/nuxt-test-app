export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'test',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  router: {
    linkPrefetchedClass: 'nuxt-link-prefetched',
    // middleware: 'test',
  },
  loading: {
    color: 'green',
    height: '5px',
    throttle: 0,
    failedColor: 'red',
    duration: 5000,
    rtl: true,
  },
  // loadingIndicator: {
  //   name: 'circle',
  //   color: 'red',
  //   throttle: 1000,
  //   background: 'white',
  // },
  server: {
    // port: 8000,
    timing: {
      total: true,
    },
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['assets/main.css'],
  pageTransition: 'fade',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-tooltip.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],
  exampleMsg: 'hello',
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/content',
    ['~/modules/example', { token: '123' }],
  ],
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  cli: {
    bannerColor: 'red',
  },
}
