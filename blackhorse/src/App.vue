<template>
  <div id="app" class="app">
    <van-nav-bar title="黑马程序员商城" :class="classObj"/>
    <transition enter-active-class="fadeInRight" leave-active-class="fadeOutLeft">
      <router-view class="animated top" style="width: 100%"></router-view>
    </transition>
    <van-tabbar v-model="active" class="bottom" id="cart">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/member">会员</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/shopcar" info="0">购物车</van-tabbar-item>
      <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Toast from "vant";
export default {
  data() {
    return {
      classObj: {
        nav: true
      },
      active: 0
    };
  },
  methods: {
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    }
  },
  mounted() {}
};
</script>

<style scope lang="less">
#app {
  overflow-x: hidden;
  position: relative;
}
.app .van-nav-bar {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 999 !important;
  left: 0;
}
.top {
  margin-top: 46px;
  margin-bottom: 50px;
}
.nav {
  background: skyblue;
}
.v-leave-to {
  position: absolute;
}
</style>
