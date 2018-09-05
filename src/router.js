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
      name: 'Users',
      component: Users
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/signup',
      name: 'Sign Up',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
