import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'
import Home from '@/views/Home'
import Findhouse from '@/views/FindHouse'
import HouseNews from '@/views/HouseNews'
import My from '@/views/My'
import Login from '@/views/Login'
import Register from '@/views/Register'
import CityList from '@/views/CityList'
import MapLoaction from '@/views/MapLocation'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: Home,
        props: true
      },
      {
        path: 'findhouse',
        component: Findhouse
      },
      {
        path: 'housenews',
        component: HouseNews
      },
      {
        path: 'my',
        component: My
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/citylist',
    component: CityList
  },
  {
    path: '/map',
    component: MapLoaction
  }
]

const router = new VueRouter({
  routes
})

export default router
