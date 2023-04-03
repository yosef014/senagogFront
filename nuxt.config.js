import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - senagog',
    title: 'senagog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    './assets/variables.scss',
    './assets/styles/main.scss'
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],
  vuetify :{
    rtl: true
  },

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: '/',
  },


  build: {
  }
}
