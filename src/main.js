// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* jshint esversion: 6 */
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
Vue.prototype.$axios = axios;
import QS from 'qs';
Vue.prototype.qs = QS;
import store from './store/store';

// import Vuex from 'vuex';

// Vue.use(Vuex);

Vue.config.productionTip = false;

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
});
