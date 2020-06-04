<template>
  <div class="login">
    <van-row type="flex" justify="space-between">
      <van-col span="6">
        <van-button
          class="operate_button"
          @click="goBack"
          type="default"
          size="large"
        >
          返回
        </van-button>
      </van-col>
      <van-col span="6">
        <van-button 
          class="operate_button" 
          @click="goToRegister" 
          type="default" 
          size="large"
        >
          注册
        </van-button>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="24" class="title" >登陆农场</van-col>
    </van-row>
    <van-form @submit="login">
      <van-field
        v-model="formData.phone"
        placeholder="手机号"
        :rules="[{ required: true, message: '请输入手机号' }]"
      />
      <van-field
        v-model="formData.pwd"
        type="password"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-checkbox
        class="remember" 
        name="1" 
        shape="square"
        checked-color="#07c160"
        v-model="rememberChecked"
      >
        记住账户
      </van-checkbox>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          登陆
        </van-button>
      </div>
    </van-form>
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
      },
      rememberChecked: false
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
    },
    goBack(){
      this.$router.go(-1)
    },
    goToRegister(){
      this.$router.push('/Register')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .operate_button{
    border: none !important;
  }
  .operate_button::before{
    background: none !important;
  }
  .title{
    font-size: 2rem;
    color: #333;
    padding: 1rem 1rem 2rem;
  }
  .remember{
    padding: .5rem 1rem;
  }
  .forget_pwd{
    padding: 0 1rem;
    color: #666;
  }
</style>
