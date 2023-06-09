<template>
  <van-row  >
    <van-col span="8">
      <van-image

        :src="require('../assets/logo.jpg')"
    /></van-col>
    <van-col span="16" style="text-align:left">
      <br>
      <van-cell >
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <span class="title">观言</span>
        </template>
        <template #label>
          <div class="label">国内首个智能汉语手语翻译软件</div>
          <van-tag type="success"
                   style="position: relative;top: 3px;">四川大学学生团队制作</van-tag>
        </template>
      </van-cell>
    </van-col>
  </van-row>
    <van-row  gutter="20" style="height: 40px;color: rgb(192,192,192);font-weight:lighter">
      <van-col span="8" >
       <div  class="bigfont" >30 MB</div>
       <div class="smallfont">大小</div>
      </van-col>
      <van-col span="8">
        <div class="bigfont">手语翻译</div>
        <div class="smallfont">核心功能</div>
      </van-col>
      <van-col span="8">
        <div class="bigfont">全年龄适用</div>
        <div class="smallfont">适用年龄</div>
      </van-col>
    </van-row>
  <van-collapse v-model="activeNames">
  <van-collapse-item title="应用简介" name="1" style="text-align: left">
    &nbsp&nbsp&nbsp&nbsp观言，专为服务听障人士群体打造，打破沟通壁垒，学习手语，优化常用App体验。App将围绕汉语翻译手语，常用词汇，手语学习专栏，实时语音转化手语，悬浮窗翻译等功能展开。
  </van-collapse-item>
  </van-collapse>
  <van-tabs v-model:active="active">
    <van-tab title="应用截图"><br><show-photos></show-photos></van-tab>
    <van-tab title="功能描述"><br><FuncDesc></FuncDesc></van-tab>
    <van-tab title="所需权限"><br><permission></permission></van-tab>
    <van-tab title="版本信息"><br><version-part></version-part></van-tab>
  </van-tabs>

  <van-sticky :offset-bottom="0" position="bottom">
    <van-button  color="linear-gradient(to right, #ff6034, #ee0a24)" size="large">
      点击下载
    </van-button>
  </van-sticky>
</template>

<script>
import showPhotos from "@/phonePage/showPhotos";
import FuncDesc from "@/phonePage/FuncDesc";
import permission from "@/phonePage/permission";
import versionPart from "@/phonePage/versionPart";
export default {
  name: "Download",
  components:{showPhotos,FuncDesc,permission, versionPart },
  data () {
    return {
      active:0,
      activeNames:[1],
    }
  }
}
</script>

<style scoped>

.title{
  font-size: 25px;
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
