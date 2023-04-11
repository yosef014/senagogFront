<template>
  <v-app style="background-color: #f4f5fa">
    <Header />
    <div class="main-content">
      <Menu />
      <div class="left-side">
        <Nuxt />
        <v-snackbar v-model="showSnackbar" :multi-line="true">
          {{ snackbarText }}
          <template v-slot:action="{ attrs }">
            <v-btn color="blue" text v-bind="attrs" @click="showSnackbar = false">
              Close
            </v-btn>
          </template>

        </v-snackbar>
      </div>

    </div>

  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  middleware: 'checkLogin',
  data() {
    return {
      showSnackbar: false,
      snackbarText: ''
    }
  },
  created() {
    this.$nuxt.$on('showSnackbar', (text) => {
      this.snackbarText = text
      this.showSnackbar = true
    })
  }

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
}
</style>
