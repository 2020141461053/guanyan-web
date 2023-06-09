<template>

  <el-dialog title="添加视频" v-model="addVideoVisible" >

    <el-form
        ref="ruleFormRef"
        :model="addVideo"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
        status-icon
    >
      <el-form-item label="视频名" prop="name">
        <el-input v-model="addVideo.name" />
      </el-form-item>
      <el-form-item label="视频描述" prop="desc_">
        <el-input v-model="addVideo.desc_" />
      </el-form-item>
      <el-form-item label="上传视频"  >
        <el-upload
            v-model:file-list="videoFile"
            ref="uploadRef"
            class="upload-demo"
            action="/api/admin/video/uploadVideo"
            :limit="1"
            :data="addVideo"
            :before-upload="beforeVideo"
            :on-success="afterVideo"
            :on-remove="deleteAddVideo"
        >
          <template #trigger>
            <el-button type="primary">选择视频</el-button>
          </template>
        </el-upload>
        </el-form-item>
      <el-form-item label="上传封面" >
        <el-upload
            v-model:file-list="photoFile"
            ref="uploadRef"
            class="upload-demo"
            action="/api/admin/video/uploadPhoto"
            :limit="1"
            :data="addVideo"
            :before-upload="beforePhoto"
            :on-success="update"
        >
          <template #trigger>
            <el-button type="primary" >选择封面</el-button>
          </template>
        </el-upload>
      </el-form-item>
         </el-form>

    <el-button  @click="step=1;addVideoVisible=false">完成</el-button>
  </el-dialog>
  <div>

  <el-table :data="tableData" stripe style="width: 100%" height="500" v-loading="loading">
    <el-table-column prop="id" label="id"/>
    <el-table-column prop="name" label="名称"  />
    <el-table-column prop="desc_" label="描述"  />
    <el-table-column prop="photos" label="封面" >
    <template #default="scope">
      <el-image
          style="width: 100px; height: 100px"
          :src="'/api/file/'+scope.row.photos"
          fit="cover"
      />
    </template>
    </el-table-column>
    <el-table-column prop="url" label="url"  />
    <el-table-column label="操作">
      <template #default="scope">
      <el-button type="primary" size="small" @click="deleteVideo(scope.$index)"><el-icon><Delete /></el-icon></el-button>
      <el-button size="small" type="primary" @click="play(scope.$index)"><el-icon><VideoPlay /></el-icon></el-button>
    </template>
    </el-table-column>

  </el-table>
    <br>

    <el-row :gutter="20">
      <el-col :span="16"><el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :page-sizes="[10,20,30,40]"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      /></el-col>
      <el-col :span="4"><el-button @click="addVideoVisible = true;videoFile=[];photoFile=[]"> 上传视频</el-button></el-col>
      <el-col :span="4"><el-button @click="update"> 更新</el-button></el-col>
    </el-row>
  </div>


</template>

<script>
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
export default {
  name: "Video",
  data(){
    return{
      tableData :[],
      currentPage:1,
      pageSize:10,
      total:10,
      loading:true,
      src:"",
      dialogPlay:false,
      addVideo: {
        id:"",
        name:"",
        desc_:"",
        },
      rules:[],
      addVideoVisible:false,
      videoFile:[],
      photoFile:[],
      step:0,

    }
  },
  methods:{
    handleSizeChange(){
      this.update()
    },
    handleCurrentChange(){
      this.update()
    },
    getData(page,size){
      this.loading=true
      this.$axios
          .post('/video/all/'+page, {
            size:size
          })
          .then(rep => {
            if (rep.data.code === 200){
              let result=rep.data.result
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
    play(data){
      window.open("/api/video/play/"+this.tableData[data].url)
      this.src='/api/video/play/'+this.tableData[data].url
      console.log(this.src)
      this.dialogPlay=true
    },
    deleteVideo(data){
      //this.loading=true
     data=this.tableData[data]
     this.$axios
          .post('/admin/video/delete', {
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

    },
    afterVideo(res){
      this.addVideo.id=res.result.id
      this.update()
      return true
    },
    beforeVideo(){
      let input=this.addVideo
      if(input.desc_===""||input.name==="") {
        ElMessage("视频名和视频描述不能为空")
        return false
      }
    },
    beforePhoto(){
      this.beforeVideo()
      console.log(this.videoFile)
      if(this.videoFile.length===0)
      {
        ElMessage("先上传视频再上传封面")
        return false
      }
    },
    deleteAddVideo(){
      this.$axios
          .post('/admin/video/delete', {
            id:this.addVideo.id
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
  },

}

</script>

<style scoped>

</style>
