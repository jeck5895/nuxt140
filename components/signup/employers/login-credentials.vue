<template>
  <div>
    <h3 class="headline text-sm-center">Login Credentials</h3>
    <v-divider class="my-3"></v-divider>
    <form>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm8 md8>
          <v-text-field solo type="email" name="username" label="Email / Username"></v-text-field>
        </v-flex>
        <v-flex xs12 sm8 md8>
          <v-text-field solo type="password" name="password" label="Password"></v-text-field>
        </v-flex>
        <v-flex xs12 sm8 md8>
          <v-text-field solo type="password" name="confirm_password" label="Confirm Password"></v-text-field>
        </v-flex>

        <v-flex xs12 sm8 md6>
          <v-btn color="primary" block>
            Save
          </v-btn>
        </v-flex>
      </v-layout>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
