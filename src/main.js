
import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './vuex/store'
import resource from 'vue-resource'
import domain from './domain'
global.domain=domain;
Vue.use(resource)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: { App }
})
