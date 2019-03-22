<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in items" :key="index" :class="className">
        <img :src="item.img" alt>
      </van-swipe-item>
    </van-swipe>
    <Gird/>
  </div>
</template>
<script>
import Gird from "../Sub/Gird";
export default {
  data() {
    return {
      items: [],
      className: {
        lunbo: true
      }
    };
  },
  components: {
    Gird
  },
  created() {
    this.getlunbo();
  },
  methods: {
    async getlunbo() {
      //发送请求
      const {
        data: { status, message }
      } = await this.$http.get("/api/getlunbo");
      // console.log(result.body);
      if (status === 0) {
        // 成功了
        this.items = message;
      } else {
        // 失败的
        console.log("失败");
      }
    }
  }
};
</script>
<style lang="less" scoped>
.lunbo {
  height: 200px;
  width: 100%;
  > img {
    width: 100%;
    height: 200px;
  }
}
</style>

