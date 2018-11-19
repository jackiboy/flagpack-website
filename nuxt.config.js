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
      { hid: 'description', name: 'description', content: 'easily add country flags to your site/app with flagpack, the lightweight flag icon toolkit' },
      { hid: 'og:image', property:'og:image', content: `https://flag.pk/og.jpg`}
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
    '~plugins/clipboard.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/pwa'],
    ['@nuxtjs/google-tag-manager', { id: 'GTM-N3HXKPW' }],
    '@nuxtjs/axios'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

 /*
  ** Favicon
  */
  icon: {
    iconSrc: "./static/favicon.png"
  },

/*
** Workbox
*/
  workbox: {
      runtimeCaching: [
      {
        urlPattern: 'https://fonts.googleapis.com/.*',
        handler: 'cacheFirst',
        method: 'GET'
      }
    ]
  },

  meta: {
    theme_color: "#320fa8",
    ogSiteName: "Flagpack",
    ogTitle: "Flagpack | a lightweight flag icon toolkit for the web",
  },
  /*
  ** Build configuration
  */
  generate: {
    subFolders: false,
    routes: [
      '/world',
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
        'lost': {},
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
