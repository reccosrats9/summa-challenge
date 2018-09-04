<template>
<div>
    <h1>Users</h1>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'users',
    data: ()=>({
        users: []
    }),
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