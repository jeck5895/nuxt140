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
              <v-flex xs12 v-if="errs.data && errs.status == 422">
                <v-alert :value="true" type="error">
                  <ul>
                    <template v-if="errs.data.errors.first_name">
                      <li v-for="(e, i) in errs.data.errors.first_name" :key="i">
                        {{ e }}
                      </li>
                    </template>

                    <template v-if="errs.data.errors.last_name">
                      <li v-for="(e, i) in errs.data.errors.last_name" :key="i">
                        {{ e }}
                      </li>
                    </template>

                    <template v-if="errs.data.errors.phonenumber">
                      <li v-for="(e, i) in errs.data.errors.phonenumber" :key="i">
                        {{ e }}
                      </li>
                    </template>

                    <template v-if="errs.data.errors.email">
                      <li v-for="(e, i) in errs.data.errors.email" :key="i">
                        {{ e }}
                      </li>
                    </template>
                  </ul>
                </v-alert>
              </v-flex>
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

              <v-flex xs12 class="mb-3">
                <!-- <vue-tel-input
                  v-model="jobseeker.phonenumber"
                  @onInput="onInput"></vue-tel-input> -->
                <v-text-field
                  v-model="jobseeker.phonenumber"
                  data-vv-name="phonenumber"
                  data-vv-as="Phone number"
                  v-validate="'required'"
                  :error-messages="errors.collect('phonenumber')"
                  solo
                  mask="phone"
                  name="phonenumber"
                  label="Phone number"></v-text-field>
              </v-flex>

              <v-flex xs12 md12 class="mb-3">
                <v-text-field
                  v-model="jobseeker.username"
                  data-vv-name="username"
                  data-vv-as="Email"
                  v-validate="'required|email'"
                  :error-messages="errors.collect('username')"
                  solo
                  type="email"
                  name="username"
                  label="Email"></v-text-field>
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
                  v-model="jobseeker.confirm_password"
                  data-vv-name="confirm_password"
                  data-vv-as="Confirm Password"
                  v-validate="'required|confirmed:password'"
                  :error-messages="errors.collect('confirm_password')"
                  solo
                  type="password"
                  name="confirm_password"
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
                  By clicking the Sign-up, You agree to Jobfair-online.net's <nuxt-link to="">Terms of Service</nuxt-link>, <nuxt-link to="">Privacy Policy</nuxt-link>, and Content Policies
                </p>
              </v-flex>
              <v-flex xs12 md12>
                <v-btn
                  @click.prevent="submit('jobseekerForm')"
                  block
                  color="success"
                  :disabled="isLoading ? true: false"
                  >
                    <span v-if="!isLoading">Sign up</span>
                    <span v-if="isLoading" class="ml-2">
                      <i class="fa fa-spinner fa-spin fa-2x"></i>
                    </span>
                  </v-btn>
              </v-flex>
            </v-layout>
          </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  middleware: 'auth',
  // fetch ({store, params}) {
  //   store.dispatch('loadJobCategories');
  //   console.log(params);
  // },
  created() {
    this.$store.dispatch('loadJobCategories');
    this.$store.dispatch('loadLocations');
    console.log(process)
  },
  data() {
    return {
      errs: [],
      isLoading: false
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
            phonenumber: this.jobseeker.phonenumber,
            email: this.jobseeker.username,
            password: this.jobseeker.password,
            confirm_password: this.jobseeker.confirm_password,
            job_category: this.jobseeker.job_category,
            location: this.jobseeker.location
          };
          this.isLoading = true;
          return new Promise((resolve, reject) => {
            axios.post('http://localhost:3221/api/jobseekers/sign-up', jobseeker)
            .then(res => {
              resolve(res);
              this.isLoading = false;
              this.$store.dispatch('clearJobseeker')
              console.log(res);
            })
            .catch(err => {
              reject(err)
              this.errs = err.response;
              this.isLoading = false;
              console.log(err.response);
            });
          });
          console.log(jobseeker)
        }
      });
    },
    onInput({ number, isValid, country }) {
       console.log(number, isValid, country);
     }
  }
}
</script>

<style>
  .vue-tel-input .input-group {
    padding-top: 0;
  }

  .vue-tel-input .btn {
    height: 100% !important;
    margin-top:0;
    margin-right:1px;
    border:none;
    background-color:#fff !important;
    border-radius:2px;
  }

  .vue-tel-input input {
    padding: 8px 16px !important;
    font-size: 1rem;
    line-height: 1.5;
    font-family: 'Roboto','san-serif' !important;
  }

  .vue-tel-input input.is-valid {
    border-color:transparent;
    -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    -webkit-box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, .2), 0px 2px 2px 0px rgba(0, 0, 0, .14), 0px 1px 5px 0px rgba(0, 0, 0, .12);
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, .2), 0px 2px 2px 0px rgba(0, 0, 0, .14), 0px 1px 5px 0px rgba(0, 0, 0, .12);
  }
</style>
