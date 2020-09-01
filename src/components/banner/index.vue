<template>
  <div>
    <div class="m-auto w-4/5 max-w-sm h-56 bg-gray-200 bg-center bg-cover rounded-lg shadow-2xl overflow-hidden"
      :style="{ 'background-image': `url(${imageUrl})` }"
    >
      <div class="h-full w-full flex flex-col justify-center items-center bg-gray-800 bg-opacity-50">
        <h3 class="font-bold text-5xl text-pink-200 tracking-wider">{{title}}</h3>
        <p v-if="indicator" class="mt-5 text-lg text-gray-300">综合指数：{{indicator}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'view-banner',
  props: ['title', 'imageUrl', 'indicator']
}
</script>