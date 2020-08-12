<template>
  <div class="year-view">
    <div class="py-1"></div>
    <view-banner
      v-if="activePageData"
      :image-url="image"
      :title="activePageData.name"
    ></view-banner>
    <div class="py-2"></div>
    <div class="text-content p-2 pb-0" v-if="baseInfos.length > 0">
      <desc-line
        v-for="baseItem of baseInfos"
        :key="baseItem.prefix"
        :prefix="baseItem.prefix"
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
  </div>
</template>

<script>
import DescLine from '@/components/DescLine'
import DescCard from '@/components/DescCard'
import ViewBanner from '@/components/banner'
import { DispatchTypeMixin, GetImageMixin } from '../util/mixins'
export default {
  name: 'year-view',
  mixins: [DispatchTypeMixin, GetImageMixin],
  components: { DescLine, DescCard, ViewBanner },
  computed: {
    baseInfos () {
      let retVal = []
      if (this.activePageData) {
        retVal = [
                    ['date', '所在年份'],
                    ['luckeyStone', '幸运石头']
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
                    ['health', '年度健康运势'],
                    ['career', '年度事业运势'],
                    ['love', '年度恋情运势'],
                    ['finance', '年度财富运势'],
                  ].map(([prop, about]) => {
                    return {
                      title: about,
                      content: this.activePageData[prop][0]
                    }
                  })
      }
      return retVal
    }
  }
}
</script>