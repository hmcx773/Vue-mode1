<template>
  <div class="goodslist">
    <div
      class="goods-item"
      v-for="(item,index) in goodslist"
      :key="index"
      @click="goDetail(item.id)"
    >
      <img :src="item.img_url" alt>
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </div>

    <van-button type="danger" size="large" @click="getmore">{{pageindex>2?"没有更多数据了":"加载数据"}}</van-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goodslist: [],
      pageindex: 1,
      //limit默认就是三条，不给也行
      limit: 3,
      more: "加载更多"
    };
  },
  created() {
    this.getgoodslist();
  },
  methods: {
    async getgoodslist() {
      //发送请求
      const {
        data: { status, message }
      } = await this.$http.get("/api/getgoods?pageindex=" + this.pageindex);
      // console.log(result.body);
      if (status === 0) {
        // 成功了
        this.goodslist = this.goodslist.concat(message);
      } else {
        // 失败的
        console.log("失败");
      }
    },
    getmore() {
      if (this.pageindex < 3) {
        this.pageindex++;
        console.log(1);

        this.getgoodslist();
      }
    },
    goDetail(id) {
      //$route 是参数对象 params query都属于他，用于获取参数
      //$router 是导航对象 可以方便的使用js代码，进行url得跳转
      this.$router.push("/home/shopinfo/" + id);
    }
  }
};
</script>
<style lang="less">
.goodslist {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  // 两边对齐中间留空格
  justify-content: space-between;

  .goods-item {
    width: 48%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    // 默认x 轴
    // 设置为column 改为 y轴
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }

    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>
