<template>
  <nav class="app-nav bg-white d-flex justify-space-around border-top">
    <router-link class="nav-item d-flex flex-column align-center justify-center"
      v-for="data of navData"
      :key="data.path"
      :to="data.path"
    >
      <i class="icon fs-lg text-center bg-light">{{data.iconText}}</i>
      <span class="text fs-sm">{{data.text}}</span>
    </router-link>
  </nav>
</template>

<script>
import { reactive } from 'vue'
import navData from '../../data/nav-list'
export default {
  name: 'app-nav',
  data: () => ({
    navData
  })
}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';

.app-nav {
  position: fixed;
  z-index: 998;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2.8rem;

  .nav-item {  
    .icon {
      width: 1.5rem;
      height: 1.5rem;
      line-height: 1.5rem;
      font-style: normal;
      border-radius: 50%;
    }

    &.router-link-exact-active {
      color: map-get($map: $colors, $key: "primary");

      .icon {
        color: #fff;
        background-color: map-get($map: $colors, $key: "primary");
      }
    }
  }
}
</style>