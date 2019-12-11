// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from './utils/http'; // axios -> ./utils/http
import store from './store';

//全局配置axios
Vue.prototype.$axios = axios; //每一个mian.js下的组件都可以用this.$axios进行请求

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
