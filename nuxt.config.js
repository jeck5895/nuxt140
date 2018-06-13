
require('dotenv').config()

module.exports = {
  /*
  ** Headers of the page
  */
  env: {
    API_KEY: process.env.API_KEY
  },
  head: {
    title: 'Jobfair-online',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'sample nuxt app' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.6/css/all.css' }
    ],
    script: [
      {
        src: 'https://use.fontawesome.com/releases/v5.0.10/js/all.js',
        integrity: 'sha384-slN8GvtUJGnv6ca26v8EzVaR9DC58QEwsIk9q1QXdCU8Yu8ck/tL/5szYlBbqmS+',
        crossorigin: 'anonymous'
      },
      {
        src: '/ckeditor/ckeditor.js'
      }
    ]
  },
  css: [
    'vuetify/src/stylus/app.styl',
    'vuetify/src/stylus/main.styl',
    '~/assets/style/styles.css',
    '~/assets/style/animate.css'
  ],
  plugins: [
    '~/plugins/vuetify.js'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      // if (isDev && isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     // loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    },
  },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv'
  ],

}
