import Vue from 'vue'
import router from './routes'
import App from './App.vue'
import Carousel3d from 'vue-carousel-3d'
Vue.config.productionTip = false;

Vue.use(Carousel3d);

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCheck);
library.add(faUserCircle);

Vue.component('fa', FontAwesomeIcon)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
