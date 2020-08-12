<template>
  <div class="view-banner px-2">
    <div class="banner-wrapper" :style="{ 'background-image': `url(${imageUrl})` }">
      <div class="title">
        <h3 class="m-0 pb-4 text-third text-normal text-center">{{title}}</h3>
        <p v-if="indicator" class="m-0 fs-xxxl text-white text-center">综合指数：{{ indicator }}</p>
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

<style lang="scss">
.view-banner {
  .banner-wrapper {
    position: relative;
    height: 17rem;
    max-width: 23rem;
    margin: 0 auto;
    border-radius: 1.2rem;
    overflow: hidden;
    box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.6);
    // background-image: url('../assets/images/mo-jie.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.2);
    }

    .title {
      position: absolute;
      z-index: 1;
      top: 50%;
      left: 50%;
      width: 100%;
      transform: translate(-50%, -50%);
      font-size: 2.8rem;

      >h3 {
        letter-spacing: .2rem;
      }
    }
  }
}

</style>