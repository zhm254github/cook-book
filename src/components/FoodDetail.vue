<template>
  <div>
    <mt-header :title="`${food.foodName}的制作教程`" fixed>
      <router-link :to="{path:'/typedetail',query: {type: type}}" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <br/>
    <br/>
    <div class="required-materials">所需材料</div>
    <div v-for="(item,index) in food.materials" :key="index" class="name-dosage">
      <div class="materialName">{{item.materialName}}</div>
      <div class="materialDosage">{{item.materialDosage}}</div>
    </div>
    <div v-for="(item,index) in food.steps" :key="item.stepNumber">
      <div class="number-text">
        {{item.stepNumber}}、{{item.stepText}}
      </div>
      <div>
        <img :src="item.stepImageUrl" class="stepImageUrl"/>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data: function () {
      return {
        food: {},
        type: {}
      }
    },
    mounted: function () {
      this.food = this.$route.query.food;
      this.type = this.$route.query.type;
    },
  }
</script>

<style>
  .required-materials {
    margin-top: 10px;
    text-align: center;
    height: 40px;
    line-height: 40px;
  }

  .name-dosage {
    display: flex;
    justify-content: space-around;
    height: 40px;
    line-height: 40px;
  }

  .materialName {
    color: black;
  }

  .materialDosage {
    color: gray;
  }

  .number-text {
    line-height: 40px;
  }

  .stepImageUrl {
    width: 100%;
    height: 200px;
  }
</style>
