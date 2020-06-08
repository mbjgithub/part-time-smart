<template>
  <div class="mycenter">
    <div class="header">
      <van-nav-bar title="个人中心">
        <template #right>
          <van-icon name="setting-o" size="20" />
        </template>
      </van-nav-bar>
    </div>
    <div class="avatar">
      <van-skeleton title avatar :row="1" avatar-size="3.66rem" :loading="false">
        <div>
          <van-row>
            <van-col>
              <van-image round width="4rem" height="4rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
            </van-col>
            <van-col class="user_detail">
              <div>test</div>
              <div>
                <van-tag type="success">已认证</van-tag>
                <van-tag type="success">已签约</van-tag>
              </div>
            </van-col>
            <van-col class="icon_detail">
              <van-icon name="arrow" />
            </van-col>
          </van-row>
        </div>
      </van-skeleton>
    </div>
    <div>
      <van-grid :border="false" :column-num="5">
        <van-grid-item icon="orders-o" text="全部订单" />
        <van-grid-item icon="pending-payment" text="待付款" />
        <van-grid-item icon="tosend" text="待发货" />
        <van-grid-item icon="send-gift-o" text="待收货" />
        <van-grid-item icon="chat-o" text="售后/退货" />
      </van-grid>
    </div>
    <div>
      <van-cell title="我的积分" is-link value="0积分" />
    </div>
    <van-divider class="my-divider" />
    <div>
      <van-grid :border="false" :column-num="4">
        <van-grid-item icon="gem-o" text="积分充值" />
        <van-grid-item icon="gift-o" text="消费奖励" />
        <van-grid-item icon="bag-o" text="积分专区" />
        <van-grid-item icon="coupon-o" text="我的门票" />
      </van-grid>
    </div>

    <div>
      <van-cell title="购物车" icon="shopping-cart-o">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="arrow" style="line-height: inherit;" />
        </template>
      </van-cell>
      <van-cell title="收藏" icon="like-o">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="arrow" style="line-height: inherit;" />
        </template>
      </van-cell>
      <van-cell title="足迹" icon="browsing-history-o">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="arrow" style="line-height: inherit;" />
        </template>
      </van-cell>
      <van-cell title="购物卡" icon="credit-pay">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="arrow" style="line-height: inherit;" />
        </template>
      </van-cell>
      <van-cell title="客服" icon="service-o">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="arrow" style="line-height: inherit;" />
        </template>
      </van-cell>
      <van-cell title="帮助" icon="aim">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="arrow" style="line-height: inherit;" />
        </template>
      </van-cell>
    </div>

    <MainBottom></MainBottom>
  </div>
</template>
<script>
import MainBottom from "../components/MainBottom";
export default {
  name: "Mycenter",
  data() {
    return {};
  },
  components: {
    MainBottom: MainBottom
  }
};
</script>
<style scoped>
.van-nav-bar {
  background-color: #07c160 !important;
}
.avatar {
  padding: 1rem;
}
.user_detail {
  padding: 0.1rem;
}
.user_detail div {
  margin: 0.66rem;
}
.icon_detail {
  float: right;
  line-height: 3.3rem;
}
.my-divider {
  margin: 0px;
}
</style>