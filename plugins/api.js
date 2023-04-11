export default (context, inject) => {
    const storeUid = context?.state?.global?.store_uid
    inject('userService', {
        login: data => context.$axios.$post('users/login', data),
        getUserByToken: data => context.$axios.$get(`users/get-user-by-token`, { params: data }),

    })
}