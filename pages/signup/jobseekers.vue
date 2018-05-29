<template>
  <v-container grid-list-md class="main-container">
    <v-layout row wrap justify-center>
      <v-flex xs12 sm6 md4>
          <v-flex xs12>
            <h3 class="headline text-sm-center">Sign up</h3>
            <v-divider class="my-3"></v-divider>
          </v-flex>
          <form data-vv-scope="jobseekerForm">
            <v-layout row wrap>
              <v-flex xs12 md6 class="mb-3">
                <v-text-field
                  v-model="jobseeker.first_name"
                  data-vv-name="first_name"
                  data-vv-as="First name"
                  v-validate="'required'"
                  :error-messages="errors.collect('first_name')"
                  solo
                  name="first_name"
                  label="First name"></v-text-field>
              </v-flex>
              <v-flex xs12 md6 class="mb-3">
                <v-text-field
                  v-model="jobseeker.last_name"
                  data-vv-name="last_name"
                  data-vv-as="Last name"
                  v-validate="'required'"
                  :error-messages="errors.collect('last_name')"
                  solo
                  name="last_name"
                  label="Last name"></v-text-field>
              </v-flex>

              <v-flex xs12 md12 class="mb-3">
                <v-text-field
                  v-model="jobseeker.username"
                  data-vv-name="username"
                  data-vv-as="Username"
                  v-validate="'required'"
                  :error-messages="errors.collect('username')"
                  solo
                  name="username"
                  label="Username"></v-text-field>
              </v-flex>
              <v-flex xs12 md12 class="mb-3">
                <v-text-field
                  v-model="jobseeker.password"
                  data-vv-name="password"
                  data-vv-as="Password"
                  v-validate="'required|min:8|alpha_num'"
                  :error-messages="errors.collect('password')"
                  solo
                  type="password"
                  name="password"
                  label="Password"></v-text-field>
              </v-flex>

              <v-flex xs12 md12 class="mb-3">
                <v-text-field
                  data-vv-name="confirm_password"
                  data-vv-as="Confirm Password"
                  v-validate="'required|confirmed:password'"
                  :error-messages="errors.collect('confirm_password')"
                  solo
                  type="password"
                  name="password"
                  label="Confirm Password"></v-text-field>
              </v-flex>

              <v-flex xs12 md12 class="mb-3">
                <v-select
                  v-model="jobseeker.job_category"
                  data-vv-name="job_category"
                  data-vv-as="Job Category"
                  v-validate="'required'"
                  :error-messages="errors.collect('job_category')"
                  solo
                  label="Job Category"
                  :items="job_categories"
                  item-text="category_name"
                  item-value="id"
                ></v-select>
              </v-flex>
              <v-flex xs12 md12 class="mb-3">
                <v-select
                  v-model="jobseeker.location"
                  data-vv-name="location"
                  data-vv-as="Location"
                  v-validate="'required'"
                  :error-messages="errors.collect('location')"
                  solo
                  label="Location"
                  :items="locations"
                  item-text="region_name"
                  item-value="id"
                ></v-select>
              </v-flex>
              <v-flex xs12 md12>
                <p class="terms-policy mb-0 text-sm-center text-md-center">
                  By Logging in, You agree to Jobfair-online.net's <nuxt-link to="">Terms of Service</nuxt-link>, <nuxt-link to="">Privacy Policy</nuxt-link>, and Content Policies
                </p>
              </v-flex>
              <v-flex xs12 md12>
                <v-btn
                  @click.prevent="submit('jobseekerForm')"
                  block
                  color="success"
                  >Sign up</v-btn>
              </v-flex>
            </v-layout>
          </form>
        <!-- </v-card> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  // fetch ({store, params}) {
  //   store.dispatch('loadJobCategories');
  //   console.log(params);
  // },
  created() {
    this.$store.dispatch('loadJobCategories');
    this.$store.dispatch('loadLocations');
  },
  data() {
    return {

    }
  },
  computed: {
    jobseeker() {
      return this.$store.getters.getJobseeker
    },
    job_categories() {
      return this.$store.getters.getJobCategories;
    },
    locations() {
      return this.$store.getters.getLocations;
    }
  },
  methods: {
    submit(scope) {
      this.$validator.validateAll(scope).then((result) => {
        if(result) {
          let jobseeker = {
            first_name: this.jobseeker.first_name,
            last_name: this.jobseeker.last_name,
            username: this.jobseeker.username,
            password: this.jobseeker.password,
            job_category: this.jobseeker.job_category,
            location: this.jobseeker.location
          };

          console.log(jobseeker)
        }
      });
    }
  }
}
</script>

<style>

</style>
