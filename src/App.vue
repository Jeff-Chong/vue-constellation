<template>
  <div id="app">
    <app-header></app-header>
    <tab-bar></tab-bar>
    <div class="view">
      <router-view></router-view>
    </div>
    <app-nav></app-nav>
  </div>
</template>

<script>
import TabBar from '@/components/Tab'
import AppNav from '@/components/Nav'
import AppHeader from '@/components/Header'
export default {
  name: 'app',
  components: { AppHeader, AppNav, TabBar }
}
</script>

<style lang="scss">
#app {
  position: relative;
  margin: 0 auto;
  max-width: 50rem;
}
.view { padding: 4.5rem 0 2.8rem; }
</style>