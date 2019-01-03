<template>
  <div class="register">
    <div class="container">
      <div class="tittle-wrapper">
        <span class="title">珀西在线后台管理系统</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
};
</script>


<style scoped>
.register {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('../assets/img/bg.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
}
.container {
  width: 370px;
  height: 210px;
  position: absolute;
  top: 10%;
  left: 34%;
  padding: 25px;
  border-radius: 5px;
  text-align: center;
  border: 5px solid rgba(255, 255, 255, 0.1);
  border-radius: 0 0 2px 2px rgba(0,0,0,1);

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
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}
</style>
