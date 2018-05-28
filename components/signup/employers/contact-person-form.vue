<template>
  <div>
    <h3 class="text-sm-center headline">Contact Person</h3>
    <v-divider class="my-3"></v-divider>
    <form>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm6 md6>
          <v-text-field solo name="first_name" label="First name"></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md6>
          <v-text-field solo name="last_name" label="Last name"></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md6>
          <v-text-field solo name="position" label="Position"></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md6>
          <v-text-field solo name="department" label="Department"></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field solo name="phonenumber" label="Phone number"></v-text-field>
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
