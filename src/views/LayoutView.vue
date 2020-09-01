<template>
  <div>
    <loading-text v-if="fetching" class="py-10"></loading-text>
    <error-text v-else-if="(errorMsg || !pageData)" class="py-10">{{(errorMsg || '发生未知错误!' )}}</error-text>
    <slot v-else></slot>
  </div>
</template>

<script>
import ErrorText from '../components/ErrorText'
import LoadingText from '../components/LoadingText'
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  name: 'layout-view',
  components: { LoadingText, ErrorText},
  computed: {
    ...mapState({
      fetching: state => state.fetching,
      errorMsg: state => state.errorMsg
    }),
    ...mapGetters({
      pageData: 'currentPageData'
    }),
  }
}
</script>