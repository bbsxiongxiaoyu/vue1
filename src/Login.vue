<template>
  <div class="login-container">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
        <h3 class="title">后台管理系统</h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" v-model="ruleForm.username" placeholder="bbsxiongxiaoyu"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" show-password autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="login('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
export default {
  name: "Login",
  data() {
    var validateUsername = (rule, value, callback) => {
      if (value.length < 14) {
        callback(new Error("请输入正确的用户名"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value.length < 6 ){
        callback(new Error("请输密码"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        username: "bbsxiongxiaoyu",
        pass: "123456",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: validateUsername, trigger: "blur" }]
      }
    };
  },
  methods:{
       async login() {
            localStorage.setItem('token',  JSON.stringify(this.ruleForm.username));
            this.$router.replace('/home')
        }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
$light_gray:#333;
.login-container{
    position: fixed;
    width:100%;
    .title{
        font-size: 26px;
        font-weight: 400;
        color: $light_gray;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold
    }
    .demo-ruleForm{
        width: 520px;
        margin: 120px auto;
        padding: 35px 35px 15px 35px;
    }
}

</style>
