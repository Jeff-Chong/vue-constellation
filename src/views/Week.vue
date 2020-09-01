<template>
  <layout-view>

    <view-banner
      v-if="pageData"
      :image-url="bannerImg"
      :title="pageData.name"
      class="py-3"
    ></view-banner>

    <div class="px-3 overflow-hidden">
      <desc-line
        v-for="baseItem of baseInfos"
        :key="baseItem.title"
        :title="baseItem.title"
        :content="baseItem.content"
        class="mb-3"
      ></desc-line>
      <desc-card
        class="mb-3"
        v-for="descItem of descInfos"
        :key="descItem.title"
        :title="descItem.title"
        :content="descItem.content"
      >
      </desc-card>
    </div>

  </layout-view>
</template>

<script>
import { mapGetters } from 'vuex'
import { ImageMixin } from '../mixins'
export default {
  name: 'week-view',
  mixins: [ ImageMixin ],
  computed: {
    ...mapGetters({
      pageData: 'currentPageData'
    }),
    baseInfos () {
      let retVal = []
      if (this.pageData) {
        retVal = [
          ['date', '本周日期'],
        ].map(([prop, about]) => {
          return {
            title: about,
            content: this.pageData[prop]
          }
        })
      }
      return retVal
    },
    descInfos () {
      let retVal = []
      if (this.pageData) {
        retVal = [
          ['work', '工作运势总结'],
          ['job', '学业运势总结'],
          ['love', '恋爱运势总结'],
          ['money', '财运运势总结'],
        ].map(([prop, about]) => {
          return {
            title: about,
            content: this.pageData[prop]
          }
        })
      }
      return retVal
    }
  }
}
</script>