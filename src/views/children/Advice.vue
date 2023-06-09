<template>

  <div style="text-align: center">
    <el-table :data="tableData" stripe style="width: 100%" height="500" v-loading="loading">
      <el-table-column prop="id" label="id"/>
      <el-table-column prop="name" label="称呼"  />
      <el-table-column prop="connection" label="联系方式"  />
      <el-table-column prop="question" label="问题" />
      <el-table-column prop="advice" label="建议"  />
      <el-table-column label="操作" width="120">
        <template #default="scope">
          <el-button type="primary" size="small" @click="deleteAdvice(scope.$index)"><el-icon><Delete /></el-icon></el-button>
        </template>
      </el-table-column>

    </el-table>
    <br>

    <el-row :gutter="20">
      <el-col :span="20"><el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[10,20,30,40]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      /></el-col>

      <el-col :span="4"><el-button @click="update"> 更新</el-button></el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: "Advice",
  data(){
    return{
      tableData :[],
      currentPage:1,
      pageSize:10,
      total:0,
      loading:true,
      addVideo:[]
    }
  },
  methods:{
    handleSizeChange(num){
      this.update()
    },
    handleCurrentChange(num){
      this.update()
    },
    getData(page,size){
      this.loading=true
      this.$axios
          .post('/advice/all/'+page, {
            size:size
          })
          .then(rep => {
            if (rep.data.code === 200){
              let result=rep.data.result
              console.log(result)
              this.tableData=result.content,
                  this.currentPage=page,
                  this.pageSize=size,
                  this.total=result.totalElements
              this.loading=false
            }
          })

    },
    update(){
      this.getData(this.currentPage,this.pageSize)
    },
    deleteAdvice(data){
      data=this.tableData[data]
      this.$axios
          .post('/admin/advice/delete', {
            id:data.id
          })
          .then(rep => {
            if (rep.data.code === 200){
              this.loading=false
              this.update()
            }

          })
          .catch(failResponse => {
            alert("出错了")
            console.log(failResponse);
            this.loading=false
          })
    }
  },
  created(){
    this.getData(1,10)
  }
}

</script>

<style scoped>

</style>
