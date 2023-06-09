<template>
  <van-swipe  class="my-swipe"  :loop="false" :width="250" >
    <van-swipe-item v-for="(show, index) in shows">
      <van-image
          width="70%"
          height="70%"
          :src=show
      />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: "showPhotos",
  data () {
    return {
      shows: [
         require('../assets/show/p1.jpg'),
         require('../assets/show/p1.jpg'),
         require('../assets/show/p1.jpg'),
         require('../assets/show/p1.jpg')
      ]
    }
  }
}
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: #ffffff;
  margin-left: -20px;
  margin-right: -20px;
  border-radius: 15px;
  overflow: hidden;
  /* 兼容IOS，否则在swiper组件内的布局都不受border-radius和overflow的约束 */
  transform: translateY(0);;
}
</style>
