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
  .van-cell::after{
    width: calc(100% - 32px);
  }
  .van-field__label{
    display: flex;
    align-items: center;
  }
</style>
