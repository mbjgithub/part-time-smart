import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Home from '@/views/Home'
import Mall from '@/views/Mall'
import GoodDetail from '@/views/GoodDetail'
import Mycenter from '@/views/Mycenter'
import Traceability from '@/views/Traceability'
import Presale from '@/views/Presale'

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
    },
    {
      path: '/Mycenter',
      name: 'mycenter',
      component: Mycenter
    },
    {
      path: '/traceability',
      name: 'Traceability',
      component: Traceability
    },
    {
      path: '/presale',
      name: 'Presale',
      component: Presale
    }

  ]
})
