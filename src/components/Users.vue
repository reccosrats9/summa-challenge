<template>
<div>
     <v-card  class='userCard' color='#D3D3D3'>
        <h3 >{{user.name}}</h3>
        <h5 >{{user.username}}</h5>
        <h5 >{{user.email}}</h5>
    </v-card>
    <v-card v-for="user in users" :key="user.email" class='userCard'>
        <h3 >{{user.name}}</h3>
        <h5 >{{user.username}}</h5>
        <h5 >{{user.email}}</h5>
    </v-card>
</div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'users',
  data: () => ({
    users: []
  }),
  computed: mapState([
    'user',
    'loggedIn'
  ]),
  mounted () {
    if (!this.loggedIn) {
      this.$router.push('/login')
    } else {
      axios.get('/users').then(res => {
        let users = res.data
        let updated = users.filter(user => user.name !== this.user.name)
        this.users = updated
      }
      )
    }
  }
}
</script>

<style>
.currentUser{
    background: #47B784;
    color: white;
}
.userCard{
    width: 200px;
    margin: auto;
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 30px;
}
</style>
