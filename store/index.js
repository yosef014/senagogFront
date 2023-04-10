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
    // async nuxtServerInit ({ dispatch, state }) {
    //   dispatch('global/autoLogin')
    // }
  },

  getters: {
    screen_size: (state) => state.screen_size,
  }
}
