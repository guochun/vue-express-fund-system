<template>
  <div class="register">
    <div class="container">
      <div class="tittle-wrapper">
        <span class="title">珀西在线后台管理系统</span>
      </div>
      <!-- 注册表单 -->
        <el-form
          :model="registerUser"
          status-icon
          :rules="rules"
          ref="registerForm"
          label-width="80px"
          class="register-form"
        >
          <el-form-item label="用户名" prop="name">
            <el-input
              type="text"
              v-model="registerUser.name"
              placeholder="请输入用户名"
              clearable
            >
            </el-input>
          </el-form-item>

          <el-form-item label="邮箱" prop="email">
            <el-input
              type="text"
              v-model="registerUser.email"
              placeholder="请输入邮箱"
              clearable
            >
            </el-input>
          </el-form-item>

          <el-form-item label="密码" prop="password">
            <el-input
              type="text"
              v-model="registerUser.password"
              placeholder="请输入密码"
              clearable
            >
            </el-input>
          </el-form-item>

          <el-form-item label="确认密码" prop="confirmPassword">
            <el-input
              type="text"
              v-model="registerUser.confirmPassword"
              placeholder="请确认密码"
              clearable
            >
            </el-input>
          </el-form-item>

          <el-form-item label="选择身份">
            <el-select v-model="registerUser.identity" placeholder="请输入身份" class="select-identity">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label-width="0px">
            <el-button type="primary" class="submit-btn" @click="submitForm('registerForm')">
              提交
            </el-button>
             <el-button class="reset-btn" @click="resetForm('registerForm')">
               重置
             </el-button>
          </el-form-item>

        </el-form>
        <!-- 注册表单结束 -->
    </div>
  </div>
</template>

<script>
// import { validateEmail, validatePassword } from "../util/validate.js";
export default {
  name: 'Register',
  data() {
    return {
      registerUser: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        identity: '',
      },
      rules: {},
      options: [
        {
          label: '管理员',
          value: 'manager',
        },
        {
          label: '员工',
          value: 'employeer',
        },
      ],
    };
  },
};
</script>


<style scoped>
.register {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("../assets/img/bg.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
}
.container {
  width: 370px;
  position: absolute;
  top: 10%;
  left: 34%;
  padding: 25px;
  border-radius: 5px;
  text-align: center;

}
.container .tittle-wrapper .title {
  font-family: "Microsoft YaHei";
  font-weight: bold;
  font-size: 26px;
  color: #fff;
}
.register-form {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 30px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}
.select-identity {
  width: 240px;
}
.submit-btn {
  width: 40%;
  margin-right: 20px;
}
.reset-btn {
  width: 40%;
}
</style>
