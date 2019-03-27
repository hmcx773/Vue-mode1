<template>
  <div class="cart">
    <div class="cart-group" v-for="(good,i) in goods" :key="i">
      <div class="cart-s">
        <van-switch v-model="good.selected" size="20px"/>
      </div>
      <div class="cart-p">
        <van-card :num="good.count" :price="good.price" :title="good.title" :thumb="good.src">
          <div slot="desc">
            <van-stepper v-model="good.count" integer class="number"/>
          </div>
          <div slot="footer">
            <van-button size="mini" @click="remove(i)">删除</van-button>
          </div>
        </van-card>
      </div>
      <van-submit-bar class="submit" :price="getAllPrice" button-text="提交订单"></van-submit-bar>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      goods: this.$store.state.car,
      checked: false
    };
  },
  computed: {
    ...mapGetters(["getAllPrice"])
  },
  created() {},
  methods: {
    remove(id) {
      this.goods.splice(id, 1);
      this.$store.commit("removeGoods", id);
    }
  }
};
</script>

<style lang="less">
.cart {
  padding: 10px;
  .cart-group {
    border: 1px solid pink;
    margin-top: 10px;
    box-shadow: 1px 1px 3px pink;
    display: flex;
    // border-bottom: none;
    .cart-s {
      flex: 1;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .cart-p {
      flex: 4;
    }
    .van-stepper__minus,
    .van-stepper__plus {
      width: 28px;
    }
    .van-stepper {
      margin-top: 10px;
    }
  }
  .submit {
    position: absolute;
    left: 0;
    bottom: 10px;

    .van-submit-bar__bar {
      background: #e6e4e4;
    }
  }
}
</style>