<template>
  <layout-view>

    <view-banner
      v-if="pageData"
      :image-url="bannerImg"
      :title="pageData.name"
      :indicator="pageData.all"
      class="py-3"
    ></view-banner>

    <!-- 基本信息和运势 start -->
    <div class="px-3 pb-3">
      <desc-line
        v-for="baseItem of baseInfos"
        :key="baseItem.title"
        :title="baseItem.title"
        :content="baseItem.content"
        class="mb-3"
      ></desc-line>
      <desc-card
        v-for="descItem of descInfos"
        :key="descItem.title"
        :title="descItem.title"
        :content="descItem.content"
      >
      </desc-card>
    </div>
    <!-- 基本信息和运势 end -->

  </layout-view>
</template>

<script>
import { mapGetters } from 'vuex'
import { ImageMixin } from '../mixins'
export default {
  name: 'tomorrow-view',
  mixins: [ ImageMixin ],
  computed: {
    ...mapGetters({
      pageData: 'currentPageData'
    }),
    baseInfos () {
      let retVal = []
      if (this.pageData) {
        retVal = [
          ['datetime', '明天日期'],
          ['QFriend', '配对星座'],
          ['color', '幸运颜色'],
          ['number', '幸运数字']
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
          ['summary', '明天运势总结'],
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