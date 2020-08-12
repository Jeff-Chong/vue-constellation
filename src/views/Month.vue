<template>
  <div class="month-view">
    <div class="py-1"></div>
    <view-banner
      v-if="activePageData"
      :image-url="image"
      :title="activePageData.name"
    ></view-banner>
    <div class="py-2"></div>
    <div class="text-content p-2 pb-0" v-if="descInfos.length > 0">
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
import DescCard from '@/components/DescCard'
import ViewBanner from '@/components/banner'
import { DispatchTypeMixin, GetImageMixin } from '../util/mixins'
export default {
  name: 'month-view',
  mixins: [DispatchTypeMixin, GetImageMixin],
  components: { DescCard, ViewBanner },
  computed: {
    descInfos () {
      let retVal = []
      if (this.activePageData) {
        retVal = [
                    ['all', '总运势总结'],
                    ['health', '健康运势总结'],
                    ['work', '工作运势总结'],
                    ['love', '爱情运势总结'],
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