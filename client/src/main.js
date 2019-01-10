import Vue from 'vue';
import {
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Button,
  Message,
  Row,
  Col,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Table,
  TableColumn,


} from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import http from './http';

import './css/reset.css';

Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(Table);
Vue.use(TableColumn);

Vue.prototype.$http = http;
Vue.prototype.$message = Message;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
