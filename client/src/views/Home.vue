<template>
  <div class="home">
    <head-nav :title="title" :icon="icon" :user="user"></head-nav>
    <left-menu></left-menu>
    <div class="main-container">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HeadNav from '../components/HeadNav';
import LeftMenu from '../components/LeftMenu';
import { mapGetters } from 'vuex';
export default {
  name: 'Home',
  data() {
    return {
      title: '珀西在线后台管理系统',
      icon: require('../assets/img/logo.png'),
    }
  },
  computed: {
    ...mapGetters({
      user: 'user',
    })
  },
  components: {
    HeadNav,
    LeftMenu,
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.main-container {
  position: relative;
  top: 0;
  left: 180px;
  width: calc(100% - 180px);
  height: calc(100% - 71px);
  overflow: auto;
}
</style>
