<template>
  <div class="week-view">
    <div class="py-1"></div>
    <view-banner
      v-if="activePageData"
      :image-url="image"
      :title="activePageData.name"
    ></view-banner>
    <div class="py-1"></div>
    <div class="text-content p-2 pb-0" v-if="baseInfos.length > 0">
      <desc-line
        v-for="baseItem of baseInfos"
        :key="baseItem.prefix"
        :prefix="baseItem.prefix"
        :content="baseItem.content"
        class="mb-4"
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
  name: 'week-view',
  mixins: [DispatchTypeMixin, GetImageMixin],
  components: { DescLine, DescCard, ViewBanner },
  computed: {
    baseInfos () {
      let retVal = []
      if (this.activePageData) {
        retVal = [
                    ['date', '本周日期'],
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
                    ['work', '工作运势总结'],
                    ['job', '学业运势总结'],
                    ['love', '恋爱运势总结'],
                    ['money', '财运运势总结'],
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