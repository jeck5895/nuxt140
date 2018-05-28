<template>
  <v-container grid-list-md class="main-container">
    <v-layout row wrap justify-center>
      <v-flex xs12 sm6 md4>
        <!-- <v-card class="pa-5"> -->
          <v-flex xs12>
          <!-- <div class="img-center logo">
            <img class="img-fluid" src="https://jobfair-online.net/assets/images/app/JFO_Small_Logo_v2.5.png" alt="">
          </div> -->
            <h3 class="headline text-sm-center">Sign up</h3>
            <v-divider class="my-3"></v-divider>
          </v-flex>
          <form>
            <v-layout row wrap>
              <v-flex xs12 md6>
                <v-text-field solo name="first_name" label="First name"></v-text-field>
              </v-flex>
              <v-flex xs12 md6>
                <v-text-field solo name="last_name" label="Last name"></v-text-field>
              </v-flex>

              <v-flex xs12 md12>
                <v-text-field solo name="username" label="Username"></v-text-field>
              </v-flex>
              <v-flex xs12 md12>
                <v-text-field solo type="password" name="password" label="Password"></v-text-field>
              </v-flex>

              <v-flex xs12 md12>
                <v-select
                  solo
                  label="Job Category"
                  :items="job_categories"
                  item-text="category_name"
                  item-value="id"
                ></v-select>
              </v-flex>
              <v-flex xs12 md12>
                <v-select
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
                <v-btn block color="success">Sign up</v-btn>
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
    job_categories() {
      return this.$store.getters.getJobCategories;
    },
    locations() {
      return this.$store.getters.getLocations;
    }
  }
}
</script>

<style>
  .terms-policy {
    font-size: 14px;
    font-weight: 600;
  }
</style>
