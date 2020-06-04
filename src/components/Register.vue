<template>
  <div class="register">
    <div class="header">
      <div class="go_back"><icon /></div>
      <div class="register">注册</div>
    </div>
    <div class="form">
      <div class='item'>
        <div class="lable">手机号</div>
        <input type="number" placeholder="请输入手机号" v-model="formData.phone" />
      </div>
      <div class="item">
        <div class="lable">验证码</div>
        <input type="password" placeholder="密码" v-model="formData.pwd" >
        <div class="get_code" @click="getCode">获取验证码</div>
      </div>
      <div class="item">
        <div class="lable">推荐人ID</div>
        <input type="text" placeholder="推荐人为900开头的11位会员ID" v-model="recommendID">
      </div>
      <div class="item register_button" @click="register">下一步</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
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
