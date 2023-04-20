export default {
  namespaced: true,

  state: () => ({
    showMenu: false,
  }),

  mutations: {
    toggleMenu (state, showMenu) {
      state.showMenu = !state.showMenu
    },
  },

  actions: {
    async nuxtServerInit ({ dispatch, state }) {
    //   dispatch('global/autoLogin')
    try {
      const cookieStr = process.browser ? document.cookie : this.app.context.req.headers.cookie
      const cookies = Cookie.parse(cookieStr || '') || {}
      const token = cookies['auth._token.local']
      if (token && token !== 'false') {
        Cookies.set('token', token)
        const user = await this.$userService.getUserByToken({ token })
        // const customer = await this.$customersService.getCustomer(token)
        if (user) { 
          await this.$auth.setUser(user)
        }
      }
    } catch (e) {
      console.log('autoLogin error', e)
    }
    }
  },

  getters: {
    screen_size: (state) => state.screen_size,
  }
}
