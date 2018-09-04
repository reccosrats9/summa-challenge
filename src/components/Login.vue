<template>
<div id='signup'>
  <v-form ref="form" v-model="valid" lazy-validation >
     <v-text-field
      v-model="username"
      :rules='usernameRules'
      label="Username"
      required
    ></v-text-field>
     <v-text-field
      v-model="password"
      :rules='passwordRules'
      label="Password"
      type="password"
      required
    ></v-text-field>
    <v-btn
      :disabled="!valid"
      @click="submit"
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
    name: 'hello-world',
    data: () => ({
      username: '',
      password: '',
    }),
  }
</script>