<template>
  <div class="login">
    <div class="operate">
      <div class="go_back">返回</div>
      <div class="register">注册</div>
    </div>
    <div class="title">登陆农场</div>
    <div class="form">
      <div class='item'>
        <input type="number" placeholder="请输入手机号" v-model="formData.phone" />
      </div>
      <div class="item">
        <input type="password" placeholder="密码" v-model="formData.pwd" >
      </div>
      <div class="item">
        <input type="checkbox" name="" id="">
        <span>记住账户</span>
      </div>
      <div class="item login_button" @click="login">登陆</div>
    </div>
    <div class="forget_pwd">忘记密码</div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      formData: {
        phone: '',
        pwd: ''
      }
    }
  },
  methods: {
    login(){
       this.$http.post({
         url: '',
         data: this.formData,
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
