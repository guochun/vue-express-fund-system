<template>
  <div class="form-container">
    <div class="title-wrapper">
      <span class="title">{{title}}</span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormContainer',
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.form-container {
  padding: 25px;
  border-radius: 5px;
  text-align: center;
}
.form-container .title-wrapper .title {
  font-family: "Microsoft YaHei";
  font-weight: bold;
  font-size: 26px;
  color: #fff;
}
</style>
