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
  const conf = config;
  startLoading();
  if (localStorage.eleToken) {
    // 设置统一的请求头
    conf.headers.Authorization = localStorage.eleToken;
  }
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
  // 处理过期的token
  const { status } = error.response;
  if (status === 401) {
    Message.error('token 失效重新登陆');
    localStorage.removeItem('eleToken');
  }
  return Promise.reject(error);
});

const http = {};

http.registerUser = (data) => {
  return axios.post('/api/users/register', data);
};

http.login = (data) => {
  return axios.post('/api/users/login', data);
}

export default http;
