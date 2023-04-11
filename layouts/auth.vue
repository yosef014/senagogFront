<template>
  <v-app style="background-color: #f4f5fa">
        <Nuxt />
  </v-app>
</template>

<script>
export default {
  name: 'auth',
  middleware: 'checkLoginOnLoginPage',
}
</script>
<style lang="scss" scoped>
</style>
