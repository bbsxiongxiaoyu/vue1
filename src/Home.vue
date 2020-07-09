<template>
  <div class="home">
    <el-container style="height: 100%; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    
    <el-menu :default-openeds="['1', '3']">
      <Navleft @func="getMsgFormSon"> </Navleft> 
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>bbsxiongxiaoyu</span>
    </el-header>
    
    <el-main>
      <el-table
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        style="width: 100%"
        v-if="this.msg==''">
      </el-table>
      <router-view v-else/>
    </el-main>
  </el-container>
</el-container>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Navleft from '@/components/Navleft.vue'

export default {
  name: 'Home',
  components: {
    Navleft
    
  },
  data(){
    return{
      loading: true,
      msg:'',
    }
  },
  methods:{
    getMsgFormSon(data){
      this.msg = data;
    }
  }
}
</script>
