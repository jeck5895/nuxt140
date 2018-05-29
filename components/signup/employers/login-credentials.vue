<template>
  <div>
    <h3 class="headline text-sm-center">Login Credentials</h3>
    <v-divider class="my-3"></v-divider>
    <form data-vv-scope="loginCredentialsForm">
      <v-layout row wrap justify-center>
        <v-flex xs12 sm8 md8 class="mb-3">
          <v-text-field
            v-model="company.username"
            v-validate="'required'"
            data-vv-name="username"
            :error-messages="errors.collect('username')"
            solo
            type="email"
            name="username"
            label="Email / Username"></v-text-field>
        </v-flex>
        <v-flex xs12 sm8 md8 class="mb-3">
          <v-text-field
            v-model="company.password"
            v-validate="'required|min:8'"
            data-vv-name="password"
            data-vv-as="Password"
            :error-messages="errors.collect('password')"
            solo
            type="password"
            name="password"
            label="Password"></v-text-field>
        </v-flex>
        <v-flex xs12 sm8 md8 class="mb-3">
          <v-text-field
            v-validate="'required|confirmed:password'"
            data-vv-name="confirm_password"
            data-vv-as="Confirm Password"
            :error-messages="errors.collect('confirm_password')"
            solo
            type="password"
            name="confirm_password"
            label="Confirm Password"></v-text-field>
        </v-flex>

        <v-flex xs12 sm8 md6>
          <v-btn @click.prevent="submit('loginCredentialsForm')" color="primary" block>
            Sign Up
          </v-btn>
        </v-flex>

        <v-flex xs12 sm8 md8>
          <p class="terms-policy mb-0 text-sm-center text-md-center">
            By Logging in, You agree to Jobfair-online.net's <nuxt-link to="">Terms of Service</nuxt-link>, <nuxt-link to="">Privacy Policy</nuxt-link>, and Content Policies
          </p>
        </v-flex>
      </v-layout>
    </form>
  </div>
</template>

<script>
  export default {
    computed: {
      company() {
        return this.$store.getters.getCompany;
      }
    },
    methods: {
      submit(scope) {
        this.$validator.validateAll(scope).then((result) => {
            if(result) {
              // let next_step = parseInt(this.step.active_step + 1);
              let company = {
                username: this.company.username,
                password: this.company.password,
              };
              // this.$store.commit('setStep', next_step)
              // console.log(next_step)
              console.log(company)
            }
          });
      }
    }
  }
</script>

<style>

</style>
