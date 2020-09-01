<template>
  <div id="app">
    <!-- header start -->
    <header class="fixed z-10 inset-x-0 top-0 h-10 bg-pink-500">
      <h1 class="h-full text-center text-white text-xl leading-10">
        <i class="iconfont icon-star" style="font-size: 1.2rem"></i>
        <span>星座运势 - {{currentConsName}}</span>
      </h1>
    </header>
    <!-- header end -->


    <!-- tab start -->
    <div class="fixed z-10 inset-x-0 bg-white border-b h-8 overflow-hidden" style="top: 2.5rem">
      <div class="w-full h-16 overflow-x-scroll overflow-y-hidden">
        <ul class="clearfix h-8" :style="{width: `${4 * tabList.length}rem`}">
          <li class="float-left w-16 text-center h-8 leading-8 cursor-pointer"
            @click="changeConsName(tab.data)"
            :class="{ 'text-pink-700 font-bold': currentConsName === tab.name }"
            v-for="tab of tabList"
            :key="tab.name"
          >
            <span>{{ tab.name }}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- tab end -->


    <!-- content start -->
    <router-view key="$route.path" class="mb-10" style="margin-top: 4.5rem"></router-view>
    <!-- content end -->


    <!-- footer start -->
    <nav class="fixed z-10 bottom-0 inset-x-0 flex justify-around h-10 bg-white border-t">
      <router-link tag="div" class="flex flex-col justify-center items-center h-full cursor-pointer"
        v-for="data of navList"
        :key="data.path"
        :to="data.path"
      >
        <i class="w-5 h-5 not-italic text-sm text-center bg-gray-500  text-white rounded-full" :class="{ 'bg-pink-400': $route.path === data.path }">{{data.iconText}}</i>
        <span class="text-xs text-gray-800" :class="{ 'text-pink-400': $route.path === data.path }">{{data.text}}</span>
      </router-link>
    </nav>
    <!-- footer end -->
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { navList, tabList } from './data'
export default {
  name: 'app',
  watch: {
    $route: {
      handler () {
        const { type } = this.$route.meta
        this.changeType({ type })
      },
      immediate: true
    }
  },
  computed: {
    ...mapState({
      currentConsName: state => state.currentConsName
    }),
    tabList: () => tabList,
    navList: () => navList
  },
  methods: {
    ...mapActions({
      changeType: 'changeType',
      changeCons: 'changeConsName'
    }),
    changeConsName (consName) {
      this.changeCons({ consName })
    }
  }
}
</script>