<template>
  <van-cell-group inset>
    <van-cell  v-for="(cell,index) in cells" :key="index" :title="cell.title" :value="cell.value" />
  </van-cell-group>
</template>

<script>
export default {
  name: "permission",
  data () {
    return {
      cells: [
        { title: '网络权限',value:"用于数据连接"},
        { title: '悬浮窗',value:"用于悬浮翻译功能"},
        { title: '麦克风',value:"获取声音进行手语翻译"},
      ]
    }
  }
}
</script>

<style scoped>

</style>
