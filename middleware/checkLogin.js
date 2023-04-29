export default function ({ store, redirect, route, router }) {
  console.log('');
    if (!store?.state?.auth?.loggedIn || !Object.keys(store.$auth?.$state?.user)?.length) {
      redirect('login')
    }
  }
