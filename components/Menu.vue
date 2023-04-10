<template>
   <div :class="{'menu': true, 'menu-open': showMenu}">

<nuxt-link class="menu-item menu-item-active" to="/">
  <i class="icon icon-dashboard" />
  <span>מסך ראשי</span>
</nuxt-link>

<nuxt-link class="menu-item" to="customers">
  <i class="icon icon-users" />
  <span>מתפללים</span>
</nuxt-link>

<nuxt-link class="menu-item" to="receipts">
  <i class="icon icon-money-recive" />
  <span>הכנסות</span>
</nuxt-link>

<nuxt-link class="menu-item" to="expenses">
  <i class="icon icon-money-send" />
  <span>הוצאות</span>
</nuxt-link>

<nuxt-link class="menu-item" to="vows">
  <i class="icon icon-vow" />
  <span>נדרים</span>
</nuxt-link>

<nuxt-link class="menu-item" to="\">
  <i class="icon icon-setting" />
  <span>הגדרות</span>
</nuxt-link>
</div>
</template>
<script>
export default {
  name: 'Menu',
  data: () => ({
    showMenu: false
    }),
  created() {
    this.$nuxt.$on('toggleMenu', () => {
      this.showMenu = !this.showMenu
    })
  },
}
</script>
<style lang="scss" scoped>
.menu {
    width: 242px;
    height: calc(100vh - 64px);
    display: flex;
    flex-direction: column;
    gap: 2px;

    .menu-item {
      cursor: pointer;
      padding-right: 30px;
      display: flex;
      gap: 20px;
      align-items: center;
      width: 95%;
      height: 48px;
      border-radius: 50px 0px 0px 50px;
      text-decoration: unset;
      color: black;

      &:hover {
        background-color: #e7e7ec;
      }
    }

    .nuxt-link-exact-active {
      background: linear-gradient(72.47deg, rgb(145, 85, 253) 22.16%, rgba(145, 85, 253, .7) 76.47%) !important;
      color: white;

      .icon {
        filter: brightness(0) saturate(100%) invert(100%) sepia(6%) saturate(24%) hue-rotate(221deg) brightness(108%) contrast(106%);
      }
    }
    @media (max-width: 1025px) {
      display: none;
      &-open {
      position: fixed;
      background-color: white;
      z-index: 10;
      width: 100vw;
      display: flex;
    }
    }
  }
</style>
