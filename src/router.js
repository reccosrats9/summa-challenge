import Vue from 'vue'
import Router from 'vue-router'
import Users from './components/Users.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'users',
      component: Users
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: '/login',
      component: Login
    }
  ]
})
