<template>
  <div class="header">
    <div class="right-side">
      <i class="icon icon-hamburger" @click="$nuxt.$emit('toggleMenu')"/>
      <span>חב"ד גני איילון</span>
    </div>
    <div class="left-side">
      <div class="icons">
        <i>icon</i>
        <i>icon</i>
        <i>icon</i>
      </div>
      <div class="search"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  }
</script>
<style lang="scss" scoped>
.header {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;


  .right-side {
    width: 242px;
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
}
</style>
