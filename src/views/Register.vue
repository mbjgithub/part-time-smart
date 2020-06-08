<template>
  <div class="register">
    <van-nav-bar class="header" title="注册" left-arrow @click-left="goBack">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <van-form @submit="onSubmit">
      <van-field
        v-model="formData.phone"
        name="手机号"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请输入手机号' }]"
      />
      <van-field class="code_box" name="code" label="验证码">
        <template #input>
          <van-field
            class="code_input"
            v-model="formData.code"
            placeholder="请填写验证码"
            :rules="[{ required: true, message: '请填写验证码' }]"
          />
          <van-button native-type="button" @click="getCode" type="primary">发送验证码</van-button>
        </template>
      </van-field>
      <van-field
        v-model="formData.recommendID"
        name="推荐人ID"
        label="推荐人ID"
        placeholder="推荐人为900开头的11位会员ID"
        :rules="[{ required: true, message: '请填写推荐人ID' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">下一步</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      formData: {
        phone: "",
        code: "",
        recommendID: ""
      }
    };
  },
  methods: {
    register() {
      this.$http.post({
        url: "",
        data: this.formData,
        successCallback(res) {},
        failCallback(err) {}
      });
    },
    getCode() {
      this.$http.post({
        url: "",
        data: { phone: this.formData.phone },
        successCallback(res) {},
        failCallback(err) {}
      });
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background-color: #07c160;
}
.code_box {
  justify-content: space-between;
}
.code_input {
  width: 59%;
  padding: 0;
}
.code_input::after {
  border: none !important;
}
</style>
