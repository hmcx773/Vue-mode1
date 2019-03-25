<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in items" :key="index" :class="className">
        <img :src="item.img || item.src" alt>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      className: {
        lunbo: true
      }
    };
  },
  props: ["items"]
};
</script>
<style lang="less" scoped>

</style>
