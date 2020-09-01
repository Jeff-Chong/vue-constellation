<template>
  <div class="border">
    <header class="bg-pink-600">
      <h2 class="h-10 leading-10 font-bold text-center text-white">{{ title }}</h2>
    </header>
    <main class="bg-white">
      <article class="p-2" style="text-indent: 2em">
        {{ content }}
      </article>
    </main>
  </div>
</template>

<script>
export default {
  name: 'desc-card',
  props: ['title', 'content']
}
</script>
