<template>
  <div>
    <v-stepper v-model="step">
      <v-stepper-header>
        <v-stepper-step step="1">Company Information</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="2">Contact Person</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">Login Credentials</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="4">Terms of Service</v-stepper-step>
      </v-stepper-header>
    </v-stepper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1
    }
  }
}
</script>

<style>

</style>
