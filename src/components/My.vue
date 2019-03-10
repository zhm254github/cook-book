<template>
  <div>
    <mt-header title="我的" fixed>
    </mt-header>
    <br/>
    <br/>
    <br/>
    <mt-button type="default" size="large" class="login-register">登录/注册</mt-button>
    <mt-cell title="我的收藏" is-link class="my-collect">
      <img slot="icon" src="../assets/collect.png" width="18" height="18">
    </mt-cell>
    <mt-cell title="关于我们" is-link class="about-us">
      <img slot="icon" src="../assets/about.png" width="18" height="18">
    </mt-cell>
  </div>
</template>

<script>

  export default {}
</script>

<style>
  .login-register {
    height: 70px;
  }

  .my-collect {
    background-color: #F6F8FA;
    margin-top: 60px;
  }

  .about-us {
    background-color: #F6F8FA;
    margin-top: 20px;
  }

  .mint-cell-wrapper {
    font-size: 18px !important;
  }
</style>
