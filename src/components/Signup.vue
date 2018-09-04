<template>
<div class='inputForm'>
  <v-form ref="form" v-model="valid" lazy-validation >
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>
     <v-text-field
      v-model="username"
      :rules='usernameRules'
      label="Username"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="Email Address"
      required
    ></v-text-field>
     <v-text-field
      v-model="password"
      :rules='passwordRules'
      label="Password"
      type="password"
      required
    ></v-text-field>
    <v-text-field
      v-model="confirmPassword"
      :rules='confirmPasswordRules'
      label="Confirm Password"
      type="password"
      required
    ></v-text-field>
    <v-btn
      :disabled="!valid"
      @click="submit"
      color=#47B784
    >
      CREATE ACCOUNT
    </v-btn>
    <!-- <v-btn @click="clear">clear</v-btn> -->
     <v-dialog
      v-model="dialog"
      width="500"
    >

      <v-card v-if="dialog">
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        > Please confirm your information:
        </v-card-title>

        <v-card-text>
          Name: {{name}}
        </v-card-text>

        <v-card-text>
          Username: {{username}}
        </v-card-text>

        <v-card-text>
          Email: {{email}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false"
          >
            This is correct
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-form>
  <p>Already have an account? <router-link to="/login">Login</router-link> </p>
</div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'Signup',
  data: () => ({
    dialog: false,
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required'
    ],
    username: '',
    usernameRules: [
      v => !!v || 'Username is required'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 12) || 'Password must be at least 12 characters'
    ],
    confirmPassword: '',
    confirmPasswordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 12) || 'Password must be at least 12 characters'
    ]
  }),

  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // alert('All done')
        // if (window.confirm(`Please confirm your name: ${this.name}, username: ${this.username}, and email: ${this.email}`)) {
        // console.log('confirmed')
        // }
        this.dialog = true
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style>
.inputForm{
  width: 60vw;
  margin: auto;
  background: lightgrey;
  padding: 20px;
}
</style>
