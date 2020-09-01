<template>
  <div class="fixed inset-x-0 mt-10 bg-purple-200 h-8">
    <div class="w-full overflow-x-auto">
      <ul class="clearfix" :style="{width: `${4 * tabData.length}rem`}">
        <li class="float-left w-16 text-center h-8 leading-8"
          v-for="tab of tabData"
          :key="tab.name"
        >
          <span>{{ tab.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { tabList } from '../../data'
export default {
  name: 'app-tab',
  computed: {
    activeConsName () {
      return this.$store.state.activeConsName
    },
    tabData: () => tabList,
  },
  methods: {
    changeActiveTab (consName) {
      this.$store.dispatch('CHANGE_CONS_NAME', { consName })
      window.scroll(0, 0)
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/_variables.scss';
.app-tab {
  position: fixed;
  z-index: 998;
  top: 2.5rem;
  left: 0;
  right: 0;
  height: 2rem;
  overflow: hidden;

  ul {
    list-style-type: none;
  }

  .app-tab-wrapper {
    overflow-y: hidden;
    overflow-x: scroll;
    height: 3rem;
  }

  .app-tab-list {
    height: 2rem;
    width: 60rem;
    
    .app-tab-item {
      width: 5rem;
      line-height: 2rem;

      > span {
        cursor: pointer;

        &.activeTab {
          color: map-get($map: $colors, $key: "primary");
        }
      }
    }
  }
}
</style>