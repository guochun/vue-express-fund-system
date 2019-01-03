import Vue from 'vue';
import {
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Button,

} from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';

import './css/reset.css';

Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Button);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
