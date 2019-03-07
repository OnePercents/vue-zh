
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import MintUI from 'mint-ui';

import 'mint-ui/lib/style.css';
import VueLazyload from 'vue-lazyload';

// 阻止启动生产消息！！！！！！！！！！！！！！！！！！！！！！！！！
Vue.config.productionTip = false;

// 使用 MintUI
Vue.use(MintUI);

// 使用 vue-scroll
// Vue.use(VueScroll);

// 使用vue-lazyload！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: 'dist/loading.gif',
  attempt: 1,
  listenEvents: [ 'scroll' ]
});

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
