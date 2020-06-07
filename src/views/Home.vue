<template>
  <div class="home">
    <van-row class="header">
      <van-col>
        <van-icon name="scan" color='#fff' size='2em' />
      </van-col>
      <van-col span="20">
        <van-search
          class="search_box"
          v-model="searchValue" 
          placeholder="搜索" 
          background="#07c160"
        />
      </van-col>
      <van-col>
        <van-icon name="chat-o" color="#fff" size="2em" />
      </van-col>
    </van-row>
    <div class="center_box">
      <van-swipe class="my_swipe" :autoplay="3000" :show-indicators="false" height='100'>
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
      <van-grid class="my_grind" :border='false'>
        <van-grid-item icon="photo-o" text="登陆" />
        <van-grid-item icon="photo-o" text="直播" />
        <van-grid-item icon="photo-o" text="公告" />
        <van-grid-item icon="photo-o" text="资讯" />
      </van-grid>
    </div>
     <van-cell title="商城广告" icon='volume-o' />
     <van-cell title="热销商城" value="更多" is-link class='hot_shopping' to="/Mall" />
     <div class="product_list">
       <HomeMall></HomeMall>
     </div>
  <div>
    <MainBottom></MainBottom>
  </div>
  </div>
</template>

<script>
import HomeMall from '../components/HomeMall'
import MainBottom from '../components/MainBottom'

export default {
  name: 'Home',
  data () {
    return {
      searchValue: '',
      tabbar_active: 0
    }
  },
  components: {
    HomeMall : HomeMall,
    MainBottom: MainBottom
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
  .home{
    background-color: #eee;
  }
  .header{
    display: flex;
    align-items: center;
    background-color: #07c160 !important;
    padding: 0 .5rem;
  }
  .search_box > div {
    background-color: #2fda81 !important;
  }
  .center_box{
    position: relative;
    padding-bottom: 4.5rem;
    margin-bottom: 1.3rem;
    background-color: #fff;
  }
  .my_swipe{
    background-color: red;
  }
  .my_grind{
    width: 80%;
    border-radius: .5rem;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -1rem);
    background-color: #fff;
    padding: 4px;;
  }
  .hot_shopping{
    margin-top: 1rem;
  }
</style>
