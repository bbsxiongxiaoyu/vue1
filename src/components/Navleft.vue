<template>
  <div class="navleft">
    <el-submenu :index="String(index)" v-for="(item,index) in listData" :key="index">
        <template slot="title"><i class="el-icon-message"></i>{{item.title}}</template>
        <el-menu-item :index="String(v.id)" v-for="(v,i) in item.titleList" :key="i" @click="gotor(v.id)">{{v.name}}</el-menu-item>
        
      </el-submenu>  
        
  </div>
</template>

<script>
export default {
  name: 'Navleft',
  props: {
    msg: String
  },
  data(){
    return{
      listData:[
        {
          title:'数据管理',
          titleList:[
            {
              id:1,
              name:'表格选项',
            },
            {
              id:2,
              name:'测试2',
            },
            {
              id:3,
              name:'测试3',
            },
          ]
        },
        {
          title:'菜单2',
          titleList:[
            {
              id:4,
              name:'测试1',
            },
            {
              id:5,
              name:'测试2',
            },
            {
              id:6,
              name:'测试3',
            },
          ]
        }
      ]
    }
  },
  methods:{
    gotor(name){
      this.$emit('func',name)
      this.$router.push({path:'/'+name})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
