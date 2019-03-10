<template>
  <div>
    <mt-header :title="type.typeName" fixed>
      <router-link to="/home" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <br/>
    <br/>
    <br/>
    <div v-for="(item,index) in type.foods" :key="index" @click="goFoodDetail('/fooddetail',item)">
      <div>
        <img :src="item.finishedImageUrl" width="100%" height="160px"/>
      </div>
      <div class="food-name">{{item.foodName}}</div>
    </div>
  </div>
</template>

<script>

  export default {
    data: function () {
      return {
        type: {}
      }
    },
    mounted: function () {
      this.type = this.$route.query.type;
    },
    methods: {
      goFoodDetail: function (path, item) {
        this.$router.push({path: path, query: {food: item, type: this.type}});
      }
    }
  }
</script>

<style>
  .food-name {
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
</style>
