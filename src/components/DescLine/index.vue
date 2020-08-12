<template>
  <div class="desc-line bg-white p-2-5 border border-radius">
    <span class="prefix text-second mr-3">{{ prefix }}</span>
    <span class="content">{{ content }}</span>
  </div>
</template>

<script>
export default {
  name: 'desc-line',
  props: ['prefix', 'content']
}
</script>