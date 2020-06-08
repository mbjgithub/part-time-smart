<template>
  <div class="mall">
    <van-tabs>
      <van-tab v-for="index in 8" :key="index" :title="'标签 ' + index">
        <div class="mall_content">
          <HomeMall></HomeMall>
        </div>
      </van-tab>
    </van-tabs>
    <MainBottom></MainBottom>
  </div>
</template>
<script>
import HomeMall from "../components/HomeMall";
import MainBottom from "../components/MainBottom";

export default {
  data() {
    return {};
  },
  components: {
    HomeMall: HomeMall,
    MainBottom: MainBottom
  }
};
</script>

<style scoped>
.mall_content {
  margin-top: 0.5rem;
}
</style>