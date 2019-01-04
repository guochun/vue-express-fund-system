import axios from 'axios';
import { Message, Loading } from 'element-ui';

let loadingInstance = null;

function startLoading() {
  loadingInstance = Loading.service({
    lock: true,
    text: '正在加载中...',
    background: 'rgba(0,0,0,0.3)',
  });
}

function endLoading() {
  loadingInstance.close();
}

// 请求拦截
axios.interceptors.request.use((config) => {
  startLoading();
  return config;
},
(error) => {
  return Promise.reject(error);
});
// 响应拦截
axios.interceptors.response.use((response) => {
  endLoading();
  return response;
},
(error) => {
  endLoading();
  Message.error(error.response.data.msg);
  return Promise.reject(error);
});

const http = {};

http.registerUser = (data) => {
  return axios.post('/api/users/register', data);
};

export default http;
