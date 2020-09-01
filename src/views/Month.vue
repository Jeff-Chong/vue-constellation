<template>
  <layout-view>

    <view-banner
      v-if="pageData"
      :image-url="bannerImg"
      :title="pageData.name"
      class="py-3"
    ></view-banner>

    <div class="px-3 overflow-hidden">
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
  name: 'month-view',
  mixins: [ ImageMixin ],
  computed: {
    ...mapGetters({
      pageData: 'currentPageData'
    }),
    descInfos () {
      let retVal = []
      if (this.pageData) {
        retVal = [
          ['all', '总运势总结'],
          ['health', '健康运势总结'],
          ['work', '工作运势总结'],
          ['love', '爱情运势总结'],
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