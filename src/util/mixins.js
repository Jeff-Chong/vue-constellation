import { getImageByConsName } from '../data/image-map'

export const DispatchTypeMixin = {
  created () {
    const { type } = this.$route.meta
    this.$store.dispatch('CHANGE_TYPE', { type })
  },
  computed: {
    activePageData () {
      let retVal = this.$store.getters.activePageData || null
      return retVal
    }
  }
}

export const GetImageMixin = {
  computed: {
    image () {
      const consName = this.$store.state.activeConsName
      const image = getImageByConsName(consName)
      return image
    }
  }
}