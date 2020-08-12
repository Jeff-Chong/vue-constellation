<template>
  <div class="app-tab border-bottom bg-white">
    <div class="app-tab-wrapper">
      <ul class="app-tab-list clearfix m-0 p-0">
        <li class="app-tab-item float-left fs-xl m-0 p-0 text-center"
          v-for="tab of tabData"
          :key="tab.name"
        >
          <span
            :class="{'activeTab': tab.name === activeConsName }"
            @click="changeActiveTab(tab.data)"
          >
            {{ tab.name }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import tabData from '../../data/tab-list'
export default {
  name: 'app-tab',
  computed: {
    activeConsName () {
      return this.$store.state.activeConsName
    },
    tabData: () => tabData,
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