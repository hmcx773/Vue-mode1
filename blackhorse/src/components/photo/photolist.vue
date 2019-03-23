<template>
  <div>
    <van-tabs @click="getimg">
      <van-tab v-model="active" v-for="(item, index) in items" :key="index" :title="item.title">
        <router-link v-for="img in imageList" :key="img.id" :to="'/home/photoprive/'+img.id">
          <img v-lazy="img.img_url">
        </router-link>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      items: [],
      imageList: []
    };
  },
  created() {
    this.getphoto();
    this.getimg(0);
  },
  methods: {
    async getphoto() {
      const {
        data: { status, message }
      } = await this.$http.get("/api/getimgcategory");
      if (status === 0) {
        message.unshift({ id: 0, title: "全部" });
        console.log(message);

        this.items = message;
      } else {
        console.log("获取失败");
      }
    },
    async getimg(index) {
      const {
        data: { status, message }
      } = await this.$http.get("/api/getimages/" + index);
      if (status === 0) {
        this.imageList = message;
      } else {
        console.log("获取失败");
      }
    }
  }
};
</script>
<style lang="less" scoped>
.box {
  position: relative;
  .text {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 555;
  }
}
</style>
