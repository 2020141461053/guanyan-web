<template>
<div style="height: 300px">
  <div v-for="(desc_,index) in desc_s" style="text-align: left">
    <span style="font-size: 18px"> 【{{desc_.name}}】</span>
    <span> {{desc_.desc_}}</span>
    <van-divider/>
  </div>
</div>
</template>

<script>
export default {
  name: "FuncDesc",
  data () {
    return {
      desc_s: [
        { name: "汉字手语翻译",desc_:"将文字信息翻译为3d模型数据，通过调用3d模型完成手语模型演示"},
        { name: "实时手语翻译",desc_:"将语音信息翻译为手语展示，可与听障人士作面对面交流"},
        { name: "语句分解模块",desc_:"将长句子进行分解，点击短语即可分段学习手语表达"},
        { name: "常用词汇模块",desc_:"系统推荐常用词汇，点击即展示，方便快捷"},
      ]
    }
  }
}
</script>

<style scoped>

</style>
