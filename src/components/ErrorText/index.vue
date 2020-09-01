<template>
  <div>
    <div class="w-1/2 p-2 font-bold text-center text-red-600 m-auto border border-dashed border-gray-700">
      <slot>发生了未知错误！</slot>
    </div>
  </div>
</template>

<script>
import LoadingDot from '../LoadingDot'
export default {
  name: 'error-text',
  components: { LoadingDot }
}
</script>