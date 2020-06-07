<template>
  <div class="bottom_content">
    <van-tabbar route active-color="#07c160">
      <van-tabbar-item replace to="/Home"  icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item replace to="/Mall"  icon="shop-o">商城</van-tabbar-item>
      <van-tabbar-item replace to="/Home"  icon="underway-o">预售</van-tabbar-item>
      <van-tabbar-item replace to="/Home"  icon="fire-o">溯源</van-tabbar-item>
      <van-tabbar-item replace to="/Home"  icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
    name: 'MainBottom',
    data () {
        return{

        }
    }
};
</script>
<style scoped>
</style>