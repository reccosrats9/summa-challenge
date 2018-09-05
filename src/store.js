import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    loggedIn: false
  },
  mutations: {
    LOGIN: (state, user) => {
      state.user = user
      state.loggedIn = true
    },
    LOGOUT: (state) => {
      state.user = {}
      state.loggedIn = false
    }
  },
  actions: {

  }
})
