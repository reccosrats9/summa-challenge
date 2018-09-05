<template>
    <div class='navbar'>
        <h2 class='title'>{{this.$route.name}}</h2>
        <h4 v-if="loggedIn" @click="vuexLogout" class="logoutButton"> Logout
        </h4>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'navbar',
  computed: mapState([
    'user',
    'loggedIn'
  ]),
  methods: {
    ...mapMutations([
      'LOGOUT'
    ]),
    vuexLogout: function () {
      this.LOGOUT()
      this.$router.push('/login')
    }
  }
}
</script>

<style>
.navbar{
    background: #47B784;
    color: white;
    width: 100vw;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 40px;
}
.logoutButton{
    position: absolute;
    right: 20px;
}
</style>
