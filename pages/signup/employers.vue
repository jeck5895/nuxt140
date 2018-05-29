<template>
  <v-container grid-list-md class="main-container">
    <v-layout row wrap justify-center>
      <v-flex xs12 sm8 md8>
        <Stepper class="mb-3"/>
      </v-flex>
      <v-flex xs12 sm8 md6>
        <CompanyInfoForm v-if="step.active_step == 1"/>
        <ContactPersonForm v-if="step.active_step == 2"/>
        <LoginCredentialsForm v-if="step.active_step == 3"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Stepper from '~/components/signup/employers/stepper'
  import CompanyInfoForm from '~/components/signup/employers/company-information-form'
  import ContactPersonForm from '~/components/signup/employers/contact-person-form'
  import LoginCredentialsForm from '~/components/signup/employers/login-credentials'

  export default {
    async fetch({store, params}) {
      await store.dispatch('loadIndustries');
      await store.dispatch('loadLocations');
    },
    computed: {
      step() {
        return this.$store.getters.getStep;
      }
    },
    components: {
      Stepper, CompanyInfoForm, ContactPersonForm, LoginCredentialsForm
    }
  }
</script>

<style>

</style>
