<template>
  <div class="desc-card border">
    <header class="header bg-second">
      <h2 class="m-0 text-center text-white py-2 fs-xxl text-normal">{{ title }}</h2>
    </header>
    <main class="bg-white">
      <article class="content fs-lg p-2">
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

<style lang="scss">
.desc-card {
  .content {
    text-indent: 2em;
  }
}
</style>