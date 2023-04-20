export default function ({ store, redirect, route }) {
  console.log('');
    if (!store?.state?.auth?.loggedIn || !Object.keys(store?.state?.auth?.user).length) {
      redirect('login')
    }
  }
