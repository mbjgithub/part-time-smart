<!-- 首页商城 -->
<template>
  <div>
    <van-row type="flex" justify="space-around" v-for="index in 4" :key="index">
        <router-link to="/goodsdetail"><GoodPannel></GoodPannel></router-link>
        <router-link to="/goodsdetail"><GoodPannel></GoodPannel></router-link>
    </van-row>
  </div>
</template>
<script>
import GoodPannel from "../components/GoodPannel";
export default {
  name: "",
  data() {
    return {
      searchValue: "",
      tabbar_active: 0
    };
  },
  components: {
    GoodPannel: GoodPannel
  }
};
</script>
<style scoped>
.van-cell__value {
  color: #f56c6c !important;
}
.van-cell__title {
  color: #606266 !important;
}
</style>