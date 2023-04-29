export default function ({ store, redirect, route, router }) {
    if (!store?.state?.auth?.loggedIn || !Object.keys(store.$auth?.$state?.user)?.length) {
      redirect('login')
    }
  }
