<template>
  <div>
    <div class="font-bold text-center">
      <slot>正在加载中</slot><loading-dot></loading-dot>
    </div>
  </div>
</template>

<script>
import LoadingDot from '../LoadingDot'
export default {
  name: 'loading-text',
  components: { LoadingDot }
}
</script>