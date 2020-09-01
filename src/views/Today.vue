<template>
  <layout-view>

    <view-banner
      v-if="pageData"
      :image-url="bannerImg"
      :title="pageData.name"
      :indicator="pageData.all"
      class="py-3"
    ></view-banner>

    <!-- 各项指数 start -->
    <div class="flex px-3 mb-3">
      <div class="flex-1 flex flex-col items-center py-2"
        v-for="indicator of indicators"
        :key="indicator.title"
        :style="{'backgroundColor': indicator.bgColor}"
      >
        <span>{{ indicator.title }}</span>
        <span class="text-xl">{{ indicator.number }}</span>
      </div>
    </div>
    <!-- 各项指数 end -->


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
  name: 'today-view',
  mixins: [ ImageMixin ],
  computed: {
    ...mapGetters({
      pageData: 'currentPageData'
    }),
    indicators () {
      let retVal = []
      if (this.pageData) {
        retVal = [
          ['health', '健康指数', '#FFF9D5'],
          ['work', '工作指数', '#F4FFFF'],
          ['love', '爱情指数', '#FEF6F0'],
          ['money', '财运指数', '#FDF8DF']
        ].map(([prop, about, bgColor]) => {
          return {
            title: about,
            bgColor,
            number: this.pageData[prop]
          }
        })
      }
      return retVal
    },
    baseInfos () {
      let retVal = []
      if (this.pageData) {
        retVal = [
          ['datetime', '今日日期'],
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
          ['summary', '今日运势总结'],
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
