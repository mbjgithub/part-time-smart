<template>
  <div class="home">
    <van-row class="header">
      <van-nav-bar title="预售"></van-nav-bar>
    </van-row>
    <div class="center_box">
      <div class="my_grind">
        <van-row>
          <van-image
            round
            width="3.66rem"
            height="3.66rem"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </van-row>
        <van-row class="user_name">missj</van-row>
        <van-row class="user_id">ID:42032290989901</van-row>
        <van-row type="flex" justify="center">
          <van-col span="8">
            <div>19.71</div>
            <div class="title_label">总资产</div>
          </van-col>
          <van-col span="8">
            <div>19.71</div>
            <div class="title_label">总资产</div>
          </van-col>
          <van-col span="8">
            <div>19.71</div>
            <div class="title_label">总资产</div>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="white_bg"></div>

    <van-grid :border="false" :column-num="5">
      <van-grid-item icon="photo-o" text="报价" />
      <van-grid-item icon="photo-o" text="关注" />
      <van-grid-item icon="photo-o" text="撤单" />
      <van-grid-item icon="photo-o" text="预定量" />
      <van-grid-item icon="photo-o" text="查询" />
    </van-grid>
    <div>
      <van-cell title="资金" icon="shopping-cart-o">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="arrow" style="line-height: inherit;" />
        </template>
      </van-cell>
      <van-cell title="充值提现" icon="like-o">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="arrow" style="line-height: inherit;" />
        </template>
      </van-cell>
      <van-cell title="积分兑换" icon="browsing-history-o">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="arrow" style="line-height: inherit;" />
        </template>
      </van-cell>
      <van-cell title="订单提货" icon="credit-pay">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="arrow" style="line-height: inherit;" />
        </template>
      </van-cell>
      <van-cell title="积分提货" icon="service-o">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="arrow" style="line-height: inherit;" />
        </template>
      </van-cell>
      <van-cell title="论坛" icon="aim">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="arrow" style="line-height: inherit;" />
        </template>
      </van-cell>
    </div>
    <div>
      <MainBottom></MainBottom>
    </div>
  </div>
</template>

<script>
import HomeMall from "../components/HomeMall";
import MainBottom from "../components/MainBottom";

export default {
  name: "Home",
  data() {
    return {
      searchValue: "",
      tabbar_active: 0
    };
  },
  components: {
    HomeMall: HomeMall,
    MainBottom: MainBottom
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  background-color: #eee;
}
.header .van-nav-bar {
  background-color: #07c160;
}
.center_box {
  position: relative;
  padding-bottom: 4.5rem;
  background-color: #07c160;
}
.my_grind {
  text-align: center;
  margin: 1.3rem 0 0 0;
  width: 80%;
  border-radius: 0.5rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -1rem);
  background-color: #fff;
  padding: 0.66rem;
}
.white_bg {
  background-color: #fff;
  height: 8.33rem;
  clear: both;
}
.banner_center {
  margin-top: 0.3rem;
}
.title_label {
  margin: 0.666rem 0;
  color: #909399;
  font-size: 0.3rem;
}
.user_name {
  margin-top: 0.6rem;
  color: #07c160;
  font-size: 1rem;
}
.user_id {
  margin: 0.4rem 0;
  color: #909399;
  font-size: 1ïrem;
}
.hot_shopping {
  margin-top: 1rem;
}
</style>
