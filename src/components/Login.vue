<template>
<div class='inputForm'>
  <v-form ref="form" >
     <v-text-field
      v-model="username"
      label="Username"
      required
    ></v-text-field>
     <v-text-field
      v-model="password"
      label="Password"
      type="password"
      required
    ></v-text-field>
    <v-btn 
    @click="loginHandle" 
    color=#47B784
    >
      LOG IN
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
  mounted(){
    console.log(this.loggedIn)
    if(this.loggedIn){
      this.$router.push('/')
    }
  },
  methods:{
    ...mapMutations([
      'LOGIN'
    ]),
    vuexLogin: function(user) {
      this.LOGIN(user)
    },
    loginHandle(){
      axios.post('http://localhost:3838/login', {
        username: this.username,
        password: this.password
      }).then(res=>{
        console.log('55',res.data)
        this.vuexLogin(res.data)
        console.log('59', this.user, this.loggedIn)
        this.$router.push('/')
    }).catch(err=>alert("The username and password you entered didn't match our records. Please try again"))
        }
    }
  }

</script>
