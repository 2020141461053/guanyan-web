<template>
<div>

  <div style="font-size: 25px">菜单</div>
  <br>
  <el-menu
    :default-active="currentPath"
    class="el-menu-admin"
    router
  >
    <!--index 没有用但是必需字段-->
      <el-menu-item v-for="child in Menus" :key="child.path" :index="child.path">
        {{ child.nameZh }}
      </el-menu-item>
  </el-menu>


</div>

</template>

<script>

  export default {
    name: 'ManagementMenu',
    computed: {
      Menus () {
        return [
          { path: "/video",
            name: "video",
            nameZh: "视频管理",
            meta: {
              requireAuth: true
            },
          },
          {
            path: "/advice",
            name: "Advice",
            nameZh: "意见管理",
            meta: {
              requireAuth: true
            }
          }
        ]
      },
      currentPath () {
        return this.$route.path
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  a{
    text-decoration: none;
  }

  span {
    pointer-events: none;
  }

   .el-menu-vertical-demo:not(.el-menu--collapse) {
     width: 200px;

     position: fixed;
     top:90px;
   }
  .el-menu-admin {
    text-align: center;
    min-height:100%;
    height: 550px;
  }


</style>
