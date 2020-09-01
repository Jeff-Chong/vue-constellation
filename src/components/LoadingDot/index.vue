<template>
  <i class="loading-dot"></i>
</template>

<script>
export default {
  name: 'loading-dot'
}
</script>

<style lang="css">
.loading-dot {
  display: inline-block;
  font-style: normal;
  height: 1em;
  line-height: 1;
  text-align: left;
  overflow: hidden;
}
.loading-dot::before {
  display: block;
  content: '...\A..\A.';
  white-space: pre-wrap;
  animation: dot1 2s infinite step-start both;
}

@keyframes dot1 {
  33% {
    transform: translateY(-2em);
  }
  66% {
    transform: translateY(-1em);
  }
}
</style>