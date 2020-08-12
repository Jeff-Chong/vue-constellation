<template>
  <div class="tomorrow-view">
    <div class="py-1"></div>
    <view-banner
      v-if="activePageData"
      :image-url="image"
      :title="activePageData.name"
      :indicator="activePageData.all"
    ></view-banner>
    <div class="py-1"></div>
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
  name: 'tomorrow-view',
  mixins: [DispatchTypeMixin, GetImageMixin],
  components: { DescLine, DescCard, ViewBanner },
  computed: {
    baseInfos () {
      let retVal = []
      if (this.activePageData) {
        retVal = [
                    ['datetime', '明天日期'],
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
                    ['summary', '明天运势总结'],
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