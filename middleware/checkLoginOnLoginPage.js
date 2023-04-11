export default function ({ store, redirect, route }) {
    if (store.state.auth.loggedIn && Object.keys(store.state.auth.user)?.length && route.name === 'login') {
        redirect('/')
    }
  }
