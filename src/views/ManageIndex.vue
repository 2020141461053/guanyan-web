<template>
  <div class="common-layout">
    <el-container>
      <el-header><h2>《观言》后台管理系统</h2></el-header>
      <el-divider>
        <el-icon><star-filled /></el-icon>
      </el-divider>
      <el-container>
        <el-aside ><ManagementMenu></ManagementMenu></el-aside>
        <el-main><router-view/></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import ManagementMenu from "./ManagementMenu";
export default {
  name: "ManagementIndex",
  components: {ManagementMenu},
  data () {
    return {
      dialogVisible: false
    }
  },
}
</script>

<style scoped>
#admin-body {
  height: 95vh;

}


</style>
.
