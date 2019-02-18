import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

Vue.use(VueRouter)

const router = new VueRouter({
  routes:[
    {path:'/',component:Home},
    {path:'/menu',component:Menu},
    {path:'/admin',component:Admin},
    {path:'/about',component:About},
    {path:'/login',component:Login},
    {path:'/register',component:Register},
    // *匹配所有的路径,当上面没有匹配的路由时，会走到该处，然后转发到 '/'
    {path:'*',redirect:'/'}
  ],
  mode:'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
