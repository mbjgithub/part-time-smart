<template>
  <div class="suyuan">
    <div class="header">
      <van-nav-bar title="溯源"></van-nav-bar>
    </div>
    <div class="top_content"></div>
    <div class="main_content">
      <van-row class="click_item">
        <van-col span="6">产品溯源</van-col>
        <van-col span="6">产品追溯</van-col>
        <van-col span="6">可视化追溯</van-col>
      </van-row>
      <van-row>
        <van-col :span="24" class="search_content">
          <van-search shape="round" v-model="search_code" show-action placeholder="请输入搜索关键词" @search="onSearch">
            <template #action>
              <van-button plain type="primary" size="small" @click="onSearch">搜索</van-button>
            </template>
          </van-search>
        </van-col>
      </van-row>
    </div>
    <div class="gray_content"></div>
    <div>
      <van-tabs color="#DCDFE6" line-width="3.66rem">
        <van-tab title="溯源平台防伪技术" class="msg_suyuan">
          <p>
            &nbsp;&nbsp;&nbsp;溯源系统利用物联网区块链等新一代的信息技术，通过对农产品赋码实现
            从种植、加工、包装出库全节点生命周期追踪，做到一品一码，不可仿照，不可替代。
          </p>
        </van-tab>
      </van-tabs>
    </div>
    <MainBottom></MainBottom>
  </div>
</template>
<script>
import MainBottom from "../components/MainBottom";
export default {
  data() {
    return {
      active: 1,
      search_code: ""
    };
  },
  components: {
    MainBottom: MainBottom
  },
  methods: {
    onSearch() {}
  }
};
</script>
<style scoped>
.top_content {
  background-image: url("../assets/suyuan_bg.jpg");
  background-size: contain;
  height: 9.66rem;
  background-repeat: no-repeat;
}
.main_content {
  background-color: #ffffff;
  margin: 0.7rem;
  border-radius: 0.3rem;
  position: relative;
  margin-top: -1.9rem;
  height: 6.66rem;
}
.van-hairline {
  background-color: #f2f6fc !important;
}
.gray_content {
  height: 0.33rem;
  background-color: #f2f6fc;
}
.msg_suyuan {
  color: #909399;
  font-size: 0.55rem;
  padding: 0.33rem;
}
.click_item {
  padding: 0.6rem;
}
.search_content .van-search__content{
    border: 1px solid #E4E7ED;
}
</style>