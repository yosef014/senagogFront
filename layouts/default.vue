<template>
  <v-app style="background-color: #f4f5fa">
    <Header />
    <div class="main-content">
      <Menu/>
      <div class="left-side">
        <Nuxt />
      </div>

    </div>

  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  // data: () => ({
  //   showMenu: true
  //   }),
}
</script>
<style lang="scss" scoped>
.main-content {
  font-family: Almoni;
  width: 100%;
  display: flex;


  .left-side {
    width: 100%;
    padding: 0 20px;
  }
}</style>
