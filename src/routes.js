import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeRoute from './pages/Home'
import ConnexionRoute from './pages/Connexion'
import ViewerModeRoute from './pages/ViewerMode'
import SignUpRoute from './pages/SignUp'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes:[
    { path:'/', component: HomeRoute },
    { path:'/login', component: ConnexionRoute },
    { path:'/signup', component: SignUpRoute },
    { path:'/user/viewer', component: ViewerModeRoute }/*,
    {redirect:'/'}*/
  ]
});