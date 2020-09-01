import { getImageByConsName } from '../data'
import { mapState } from 'vuex'

export const ImageMixin = {
  computed: {
    ...mapState({
      consName: state => state.currentConsName
    }),
    bannerImg () {
      const image = getImageByConsName(this.consName)
      return image
    }
  }
}