<template>
  <div class="app">
    <swipe :items="items"/>
    <Gird/>
  </div>
</template>
<script>
import Gird from "../Sub/Gird";
import swipe from "../Sub/swipe";
export default {
  data() {
    return {
      items: []
    };
  },
  components: {
    Gird,
    swipe
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

