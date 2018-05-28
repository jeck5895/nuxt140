<template>
  <v-container grid-list-md class="main-container">
    <v-layout row wrap justify-center>
      <v-flex xs12 sm8 md8>
        <Stepper class="mb-3"/>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <CompanyInfoForm/>
        <ContactPersonForm/>
        <LoginCredentialsForm/>
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
    components: {
      Stepper, CompanyInfoForm, ContactPersonForm, LoginCredentialsForm
    }
  }
</script>

<style>

</style>
