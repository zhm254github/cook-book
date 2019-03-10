<template>
  <div>
    <router-view class="router-view"></router-view>
    <FooterBar v-show="$route.meta.showFooterBar"></FooterBar>
  </div>
</template>

<script>
  import FooterBar from './components/FooterBar.vue'

  export default {
    name: 'App',
    components: {FooterBar}
  }
</script>

<style lang="less">
  .router-view {
    margin-bottom: 80px;
  }
</style>
