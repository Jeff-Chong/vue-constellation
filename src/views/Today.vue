<template>
  <div class="today-view">
    <div class="py-1"></div>
    <view-banner
      v-if="activePageData"
      :image-url="image"
      :title="activePageData.name"
      :indicator="activePageData.all"
    ></view-banner>
    <div class="py-1"></div>
    <!-- 各项指数 -->
    <div class="indicators d-flex p-2"
      v-if="indicators.length > 0"
    >
      <div class="indicator flex-1 d-flex flex-column align-center py-3"
        v-for="indicator of indicators"
        :key="indicator.title"
        :style="{'backgroundColor': indicator.bgColor}"
      >
        <span>{{ indicator.title }}</span>
        <span class="fs-xxxl mt-2">{{ indicator.number }}</span>
      </div>
    </div>
    <div class="py-2"></div>
    <!-- 基本信息和运势 -->
    <div class="text-content p-2" v-if="baseInfos.length > 0">
      <desc-line
        v-for="baseItem of baseInfos"
        :key="baseItem.prefix"
        :prefix="baseItem.prefix"
        :content="baseItem.content"
        class="mb-4"
      ></desc-line>
      <desc-card
        v-for="descItem of descInfos"
        :key="descItem.title"
        :title="descItem.title"
        :content="descItem.content"
      >
      </desc-card>
    </div>
  </div>
</template>

<script>
import DescLine from '@/components/DescLine'
import DescCard from '@/components/DescCard'
import ViewBanner from '@/components/banner'
import { DispatchTypeMixin, GetImageMixin } from '../util/mixins'
export default {
  name: 'today-view',
  mixins: [DispatchTypeMixin, GetImageMixin],
  components: { DescLine, DescCard, ViewBanner },
  computed: {
    indicators () {
      let retVal = []
      if (this.activePageData) {
        retVal = [
                    ['health', '健康指数', '#FFF9D5'],
                    ['work', '工作指数', '#F4FFFF'],
                    ['love', '爱情指数', '#FEF6F0'],
                    ['money', '财运指数', '#FDF8DF']
                  ].map(([prop, about, bgColor]) => {
                    return {
                      title: about,
                      bgColor,
                      number: this.activePageData[prop]
                    }
                  })
      }
      return retVal
    },
    baseInfos () {
      let retVal = []
      if (this.activePageData) {
        retVal = [
                    ['datetime', '今日日期'],
                    ['QFriend', '配对星座'],
                    ['color', '幸运颜色'],
                    ['number', '幸运数字']
                  ].map(([prop, about]) => {
                    return {
                      prefix: about,
                      content: this.activePageData[prop]
                    }
                  })
      }
      return retVal
    },
    descInfos () {
      let retVal = []
      if (this.activePageData) {
        retVal = [
                    ['summary', '今日运势总结'],
                  ].map(([prop, about]) => {
                    return {
                      title: about,
                      content: this.activePageData[prop]
                    }
                  })
      }
      return retVal
    }
  }
}
</script>

<style lang="scss">
.today-view {
  .indicators {
    box-shadow: 0 3px 5px 1px #ccc;
  }
}
</style>