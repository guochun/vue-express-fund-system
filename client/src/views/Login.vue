<template>
    <div class="login">
      <form-container class="container" :title=title>
        <el-form :model="loginUser" :rules="rules" ref="loginForm" class="login-form" label-width="60px">
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="loginUser.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="loginUser.password" placeholder="请输入密码" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"  @click="submitForm('loginForm')" class="submit-btn">登  录</el-button>
            </el-form-item>
            <div class="tip-area">
                <p>还没有账号？现在<router-link to='/register'>注册</router-link></p>
            </div>
        </el-form>
      </form-container>
    </div>
</template>

<script>
//import jwt_decode from "jwt-decode";
import FormContainer from '../components/FormContainer'
import { validateEmail, validatePassword } from '../util/validate.js';
export default {
  name: "Login",
  data() {
    return {
      title: "珀西在线后台管理系统",
      loginUser: {
        email: "",
        password: ""
      },
      rules: {
        email: validateEmail,
        password: validatePassword,
      }
    };
  },
  components: {
    FormContainer,
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$http.login(this.loginUser).then(res => {
            // 登录成功
            const { token } = res.data;
            localStorage.setItem("eleToken", token);

            // 解析token
            //const decode = jwt_decode(token);

            // 存储数据
            // this.$store.dispatch("setIsAutnenticated", !this.isEmpty(decode));
            // this.$store.dispatch("setUser", decode);

            // 页面跳转
            this.$message.success('登陆成功');
            this.$router.push("/index");
          });
        } else {
          this.$message.error('表单验证未通过')
        }
      });
    },
    isEmpty(value) {
      return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
      );
    }
  }
};
</script>

<style scoped>
.login {
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
  top: 20%;
  left: 34%;
}
.login-form {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}
.tip-area {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tip-area p a {
  color: #409eff;
}
</style>


