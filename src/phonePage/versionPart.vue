<template>
  <van-cell  style="text-align:left" >
    <!-- 使用 title 插槽来自定义标题 -->
    <template #title>
      <span class="title">最新版本</span>
    </template>
    <template #label>
      <span class="label">{{ version }}</span> |
      <van-tag plain type="primary">{{time}}</van-tag>

      <div style="font-size: medium"> <br>{{desc_}}</div>
    </template>
  </van-cell>
</template>

<script>
export default {
  name: "versionPart",
  data () {
    return {
     version:"1.0",
     time:"2023年1月10日",
     desc_:"【首次发布】 推出《观言》app，"
    }
  }
}
</script>

<style scoped>

.title{
  font-size: 18px;
}
.label{
  font-size: 12px;
}
.image {
  border-radius: 25px;
}
.bigfont{
  font-size: 20px;
  height: 25px;
}
.smallfont{
  font-size: 13px;
}
</style>
