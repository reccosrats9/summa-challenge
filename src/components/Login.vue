<template>
<div class='inputForm'>
  <v-form ref="form" >
     <v-text-field
      v-model="username"
      label="Username"
      v-on:keyup.enter="loginHandle"
      required
    ></v-text-field>
     <v-text-field
      v-model="password"
      label="Password"
      type="password"
      required
      v-on:keyup.enter="loginHandle"
    ></v-text-field>
    <v-btn
    @click="loginHandle"
    color=#47B784
    >LOG IN
    </v-btn>

  </v-form>
  <p>Don't have an account? <router-link to="/signup">Sign up</router-link> </p>
</div>
</template>

<script>
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'login',
  data: () => ({
    username: '',
    password: ''
  }),
  computed: mapState([
    'user',
    'loggedIn'
  ]),
  mounted () {
    if (this.loggedIn) {
      this.$router.push('/users')
    }
  },
  methods: {
    ...mapMutations([
      'LOGIN'
    ]),
    vuexLogin: function (user) {
      this.LOGIN(user)
    },
    loginHandle () {
      axios.post('/login', {
        username: this.username,
        password: this.password
      }).then(res => {
        this.vuexLogin(res.data)
        this.$router.push('/users')
      }).catch(err => {
        console.log(err)
        alert("The username and password you entered didn't match our records. Please try again")
      })
    }
  }
}

</script>
