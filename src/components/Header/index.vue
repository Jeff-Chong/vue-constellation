<template>
  <header class="app-header bg-primary">
    <h1 class="title m-0 text-center text-white">
      <i class="iconfont icon-star fs-xxxl"></i>星座运势
    </h1>
  </header>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style lang="scss">
.app-header {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 2.5rem;

  .title {
    font-size: 1.4rem;
    line-height: 2.5rem;
    letter-spacing: .1rem;
    font-weight: normal;
  }
}
</style>
