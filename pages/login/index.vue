<template>
  <v-container grid-list-md class="main-container">
    <v-layout row wrap justify-center>
      <v-flex xs12 sm8 md4>
        <v-flex xs12>
          <div class="img-center logo">
            <img class="img-fluid" src="https://jobfair-online.net/assets/images/app/JFO_Small_Logo_v2.5.png" alt="">
          </div>
        </v-flex>
        <form action="">
          <v-flex xs12>
            <v-text-field prepend-icon="account_circle" solo name="username" label="Username"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field prepend-icon="vpn_key" solo name="password" label="Password" type="password"></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-btn color="primary" block>
              Sign in
            </v-btn>
          </v-flex>
          <v-flex xs12>
            <a href="#" class="forgot-password" nuxt>Forgot password?</a>
          </v-flex>

          <v-layout row wrap>
            <v-flex xs6>
              <v-btn block small color="primary">
                <v-icon small class="icon-left">fab fa-facebook-square</v-icon> <span class="ml-3">Sign in with Facebook</span>
              </v-btn>
            </v-flex>
            <v-flex xs6>
              <v-btn block small color="error">
                <v-icon small class="icon-left">fab fa-google-plus-square</v-icon> <span class="ml-1">Sign in with Google</span>
              </v-btn>
            </v-flex>
          </v-layout>

          <v-flex xs12>
            <p class="body-2">Don't have account? Sign up now <nuxt-link class="" to="/signup/job-seeker">Job Seeker</nuxt-link> or <nuxt-link class="" to="/signup/employer">Employer</nuxt-link>.</p>
          </v-flex>
        </form>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    layout: 'default'
  }

</script>

<style>

  .forgot-password {
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
  }
</style>
