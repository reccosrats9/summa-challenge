<template>
<div>
    <h1>Users</h1>
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
    data: ()=>({
        users: []
    }),
    computed: mapState([
        'user',
        'loggedIn'
    ]),
    mounted(){
        axios.get('http://localhost:3838/users').then(res=>{
            this.users=res.data
        }
        )
    } 
}
</script>

<style>
.userCard{
    width: 200px;
    margin: auto;
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 30px;
}
</style>