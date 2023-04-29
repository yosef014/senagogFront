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
    './plugins/api.js',
    './plugins/axios.js'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],
  vuetify :{
    rtl: true
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true
        },
        user: {
          property: 'user',
          autoFetch: false
        },
        endpoints: {
          // Get the token of the user from the server
          login: { url: 'users/login', method: 'post', propertyName: 'token' },
          logout: false,
          // logout: { url: '/api/customers/logout', method: 'post' },
          user: false
          // Get the user information from the server
          // user: { url: 'auth/find-one', method: 'get', propertyName: 'user' }
        }
      }
    }
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],

  axios: {
    baseURL: 'http://localhost:4000/',
    // proxyHeaders: false,
    // proxy: true,
    // credentials: false
  },



  build: {
  }
}
