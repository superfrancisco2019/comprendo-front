import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeRoute from './pages/Home'
import ConnexionRoute from './pages/Connexion'
import ViewerModeRoute from './pages/ViewerMode'
import SignUpRoute from './pages/SignUp'
import AdminHomeRoute from './pages/AdminHome'
import AdminHomeRoute2 from './pages/AdminHome2'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes:[
    { path:'/', component: HomeRoute },
    { path:'/login', component: ConnexionRoute },
    { path:'/signup', component: SignUpRoute },
    { path:'/user/viewer', component: ViewerModeRoute },
    { path:'/user/home', component: AdminHomeRoute },
    { path:'/user/home2', component: AdminHomeRoute2 }/*,
    {redirect:'/'}*/
  ]
});