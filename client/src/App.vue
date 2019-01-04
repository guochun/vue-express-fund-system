<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    this.storeState = () => {localStorage.setItem('vueState',JSON.stringify(this.$store.state))}
    // 在页面加载时读取localStorage里的状态信息
    const vueState = localStorage.getItem('vueState');
    vueState && this.$store.replaceState(Object.assign((this.$store.state, JSON.parse(vueState))));
    //在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener('beforeunload',this.storeState);

  },
  beforeDestroy () {
    localStorage.removeItem('vueState');
    window.removeEventListener('beforeunload', this.storeState);
  }
}
</script>


<style>
#app {
  height: 100vh;
}
</style>
