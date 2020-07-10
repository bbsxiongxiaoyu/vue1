import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'


const Login = () => import('../Login.vue');
const Home = () => import('../Home.vue');
const About = () => import('../views/About.vue');
Vue.use(VueRouter)
  


  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        id: 1,
        path: '/1',
        component: About,
        name: 'about',
      }
    ]
  },

  {
    path: '*',
    redirect:'/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


export default router
