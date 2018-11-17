import pkg from './package';

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Flagpack | a lightweight flag icon toolkit for the web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'easily add country flags to your site/app with flagpack, the lightweight flag icon toolkit' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#eb25e1' },

  /*
  ** Global CSS
  */
  css: [{src: '@/assets/scss/main.scss'}],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/filters.js',
    '~plugins/fuse.js',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  generate: {
    subFolders: false,
    routes: [
      '/all',
      '/north-america',
      '/south-america',
      '/africa',
      '/asia',
      '/europe',
      '/oceania'
    ]
  },

  build: {
    /*
    ** You can extend webpack config here
    */
    postcss: {
      plugins: {
        'autoprefixer': {
          browsers: ['>1%']
        },
        'lost': {}
      },
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
