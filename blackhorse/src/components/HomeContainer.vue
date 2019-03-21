<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in items" :key="index" :class="className">
        <img :src="item.img" alt>
      </van-swipe-item>
    </van-swipe>
    <Gird />
  </div>
</template>
<script>
import Gird from '../components/Gird'
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
    getlunbo() {
      //发送请求
      this.$http.get("http://localhost:5000/api/getlunbo").then(result => {
        // console.log(result.body);
        if (result.data.status === 0) {
          // 成功了
          console.log(result.data);

          this.items = result.data.message;
        } else {
          // 失败的
          console.log("失败");
        }
      });
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

