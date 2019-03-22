<template>
  <div class="newsinfo">
    <h3 class="tittle">{{newsinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间： {{newsinfo.add_time | datefmt}}</span>
      <span>点击：{{newsinfo.click}}次</span>
    </p>
    <hr>
    <div class="content">{{newsinfo.content}}</div>
    <comment></comment>
  </div>
</template>
<script>
import comment from "../Sub/comment";
export default {
  data() {
    return {
      id: "",
      newsinfo: []
    };
  },
  components: {
    comment
  },
  created() {
    this.id = this.$route.params.id;
    this.getnewsinfo();
  },
  methods: {
    async getnewsinfo() {
      //发送请求
      const {
        data: { status, message }
      } = await this.$http.get("/api/getnew/" + this.id);
      // console.log(result.body);
      if (status === 0) {
        // 成功了
        this.newsinfo = message;
      } else {
        // 失败的
        console.log("失败");
      }
    }
  }
};
</script>
<style lang="less">
.newsinfo {
  padding: 0 5px 50px 0;
  width: 100%;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
}
</style>
