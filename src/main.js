import Vue from 'vue'
import router from './routes'
import App from './App.vue'
Vue.config.productionTip = false;


import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCheck)

Vue.component('fa', FontAwesomeIcon)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
