import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Home from '@/views/Home'
import Mall from '@/views/Mall'
import GoodDetail from '@/views/GoodDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/mall',
      name: 'Mall',
      component: Mall
    },
    {
      path: '/goodsdetail',
      name: 'GoodDetail',
      component: GoodDetail
    }
  ]
})
