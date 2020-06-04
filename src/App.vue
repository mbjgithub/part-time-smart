<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
  .van-nav-bar__title,
  .van-nav-bar .van-icon{
    color: #fff !important;
  }
  .van-cell::after{
    width: calc(100% - 32px);
  }
  .van-field__label{
    display: flex;
    align-items: center;
  }
</style>
