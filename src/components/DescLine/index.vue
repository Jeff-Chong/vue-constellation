<template>
  <div class="bg-white py-2 px-1 border rounded-md relative">
    <span class="absolute text-pink-700 w-20 text-center tracking-tight">{{title}}</span>
    <p class="pl-20">{{content}}</p>
  </div>
</template>

<script>
export default {
  name: 'desc-line',
  props: ['title', 'content']
}
</script>