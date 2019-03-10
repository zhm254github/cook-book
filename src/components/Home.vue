<template>
  <div>
    <mt-header title="首页" fixed>
    </mt-header>
    <br/>
    <br/>
    <mt-swipe :auto="1000" style="width: 100%;height: 200px;">
      <mt-swipe-item>
        <img src="http://img.hb.aicdn.com/7a6f9e2785f709caaf7426093703d905a0a0182b5bcb1-O2g8QC_fw658"
             style="width: 100%;height: 200px;"/>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://img.hb.aicdn.com/1843547fbf5554826e649fba7e79c320cb084cbd71be2-1Z4MbB_fw658"
             style="width: 100%;height: 200px;"/>
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="http://img.hb.aicdn.com/b31557d7ea33cd7b7a48a4d1338b46b5ab2f04a13de0d-8qH50y_fw658"
             style="width: 100%;height: 200px;"/>
      </mt-swipe-item>
    </mt-swipe>
    <div class="title">美食种类</div>
    <div v-for="(item,index) in types" :key="index" @click="goTypeDetail('/typedetail',item)">
      <div>
        <img :src="item.typeImg" width="100%" height="160px"/>
      </div>
      <div class="type-name">{{item.typeName}}</div>
    </div>
  </div>
</template>

<script>

  import axios from 'axios';

  export default {
    components: {},
    data: function () {
      return {
        types: []
      }
    },
    methods: {
      goTypeDetail: function (path, item) {
        this.$router.push({path: path, query: {type: item}});
      }
    },
    mounted: function () {
      axios.get('data.json')
        .then((response) => {
          this.types = response.data.types;
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
</script>

<style>
  .title {
    height: 50px;
    line-height: 50px;
    margin-left: 20px;
  }

  .type-name {
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
</style>
