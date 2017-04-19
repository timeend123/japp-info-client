import Vue from 'vue'
import Router from 'vue-router'
import  VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import sqlConfigManage from '../components/sqlConfigManage.vue'
Vue.use(Router)
Vue.use(VueMaterial)

export default new Router({
  history:true,
  routes: [
    {
      path: '/',
      name: 'sqlConfigManage',
      component: sqlConfigManage
    }
  ]
})


