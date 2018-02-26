import Vue from 'vue';
import App from './App.vue';
import router from './router';

import VueAwesomeSwiper from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css');
Vue.use(VueAwesomeSwiper);

new Vue({
  el:"#app",
  ...App,
  router
});
