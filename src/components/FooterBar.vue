<template>
  <div>
    <mt-tabbar v-model="$route.path" fixed>
      <mt-tab-item id="/home" v-on:click.native="chooseTab('/home')">
        <img slot="icon" src="../assets/home.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="/my" v-on:click.native="chooseTab('/my')">
        <img slot="icon" src="../assets/my.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>

  export default {
    name: 'FooterBar',
    data: function () {
      return {}
    },
    methods: {
      chooseTab: function (path) {
        this.$router.replace(path);
      }
    }
  }
</script>

<style>

</style>
