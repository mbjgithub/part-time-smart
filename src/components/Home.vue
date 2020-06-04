<template>
  <div class="home">
    <div class="header">
      <div class="scan"></div>
      <div class="search_box">
        <span class="search_icon"></span>
        <input type="text" name="" id="" placeholder="搜索" />
      </div>
      <div class="message"></div>
    </div>
    <div class="swiper_banner"></div>
    <div class="center_tab"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      formData: {
        phone: '',
        code: '',
        recommendID: ''
      }
    }
  },
  methods: {
    register(){
       this.$http.post({
         url: '',
         data: this.formData,
         successCallback(res) {

         },
         failCallback(err) {

         }
       })
    },
    getCode(){
      this.$http.post({
         url: '',
         data: { phone: this.formData.phone },
         successCallback(res) {

         },
         failCallback(err) {

         }
       })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
