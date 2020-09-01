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
  name: 'year-view',
  mixins: [ ImageMixin ],
  computed: {
    ...mapGetters({
      pageData: 'currentPageData'
    }),
    baseInfos () {
      let retVal = []
      if (this.pageData) {
        retVal = [
          ['date', '所在年份'],
          ['luckeyStone', '幸运石头']
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
          ['health', '年度健康运势'],
          ['career', '年度事业运势'],
          ['love', '年度恋情运势'],
          ['finance', '年度财富运势'],
        ].map(([prop, about]) => {
          return {
            title: about,
            content: this.pageData[prop][0]
          }
        })
      }
      return retVal
    }
  }
}
</script>