<template>
  <div class="home">
    <head-nav :title="title" :icon="icon" :user="user"></head-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import HeadNav from '../components/HeadNav';
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
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
