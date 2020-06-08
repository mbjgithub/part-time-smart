<template>
  <div>
    <van-row class="header" type="flex" justify="space-between">
      <van-col>
        <van-icon name="arrow-left" color="#fff" size="2em" @click="onClickLeft" />
      </van-col>
      <van-col
        span="4"
        :class="{ activeClass: activeIndex == index}"
        v-for="(value, index) in navLists"
        :key="index"
        class="goods_pannel pannel"
        @click="selectItem(index)"
      >{{ value }}</van-col>
      <van-col>
        <van-icon name="wap-home-o" color="#fff" size="2em" @click="onClickRight" />
      </van-col>
    </van-row>
    <van-row class="swipe_goods">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <van-image :src="image" />
        </van-swipe-item>
      </van-swipe>
    </van-row>
    <div class="good_price">
      <van-cell-group>
        <van-cell title="西葫芦" label="$29.80" />
      </van-cell-group>
      <van-cell>
        <template #title>
          <span class="good_title">运费：</span>
          <van-tag type="good_text">不包邮</van-tag>
        </template>
      </van-cell>
      <van-cell>
        <template #title>
          <span class="good_title">规格：</span>
          <van-tag type="good_text">500g</van-tag>
        </template>
      </van-cell>
    </div>
    <div>
      <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">详情</van-divider>
      <van-image v-for="(item, index) in good_pics" :key="index" :src="item" />
    </div>
    <div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" />
        <van-goods-action-icon icon="shop-o" />
        <van-goods-action-icon icon="star" />
        <van-goods-action-button color="#67C23A" type="warning" text="加入购物车" />
        <van-goods-action-button color="#F56C6C" type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodDetail",
  data() {
    return {
      navLists: ["商品", "详情"],
      activeIndex: 0,
      // 商品轮播
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
      good_pics: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.replace("/Home");
    },
    selectItem(index) {
      this.activeIndex = index;
    }
  }
};
</script>
<style scoped>
.header {
  display: flex;
  align-items: center;
  background-color: #07c160 !important;
  padding: 0 0.5rem;
}
.van-sticky {
  background-color: #2fda81 !important;
}
.activeClass {
  border-bottom: 1px solid #ffffff;
}
.pannel {
  text-align: center;
  color: #ffffff;
    position: relative;
    margin: 0.969rem 0;
}
.good_price .van-cell__label {
  color: #f56c6c !important;
}
.good_price .van-cell {
  color: #909399 !important;
}
.good_price .van-tag {
  color: #000000 !important;
}
</style>