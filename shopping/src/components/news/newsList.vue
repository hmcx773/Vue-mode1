<template>
  <div class="newslist">
    <router-link :to="'/home/newsinfo/'+item.id" v-for="(item, index) in newlist" :key="index">
      <van-card title="商品标题" :thumb="item.img_url">
        <!-- 插槽作用域 -->
        <div slot="price">
          <span>发表时间:{{item.add_time | datefmt}}</span>
        </div>
        <div slot="num">
          <span>点击{{item.click}}次</span>
        </div>
      </van-card>
    </router-link>
  </div>
</template>
<script>
import Toast from "vant";
export default {
  data() {
    return {
      newlist: []
    };
  },
  created() {
    this.getnewslist();
  },
  methods: {
    async getnewslist() {
      //发送请求
      const {
        data: { status, message }
      } = await this.$http.get("/api/getnewslist");
      // console.log(result.body);
      if (status === 0) {
        // 成功了
        this.newlist = message;
      } else {
        // 失败的
        console.log("失败");
      }
    }
  }
};
</script>