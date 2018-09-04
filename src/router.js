import Vue from 'vue'
import Router from 'vue-router'
import Users from './components/Users.vue'
import Signup from './components/Signup.vue'
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
      path: '/signup',
      name: 'Sign Up',
      component: Signup
    },
    {
      path: '/login',
      name: '/login',
      component: Login
    }
  ]
})
