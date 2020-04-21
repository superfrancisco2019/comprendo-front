
import Vue from 'vue'
//import VueRouter from 'vue-router'
//Vue.use(VueRouter)
//const router = new VueRouter({
  //mode: 'history',
  //routes:[{
   // path:'/',
    //component: require('./components/Page1.vue')
 // },{
   ///redirect:'/'

  //}]
//})
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //router,
  components: { App },
  template: '<App/>',
  //render: h => h(require('./App.vue'))
})
