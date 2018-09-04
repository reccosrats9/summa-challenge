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
      color=#47B784
    >
      LOG IN
    </v-btn>

  </v-form>
  <p>Don't have an account? <router-link to="/signup">Sign up</router-link> </p>
</div>
</template>

<script>
export default {
  name: 'login',
  data: () => ({
    username: '',
    password: ''
  }),
}
</script>
