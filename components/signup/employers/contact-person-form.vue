<template>
  <div>
    <h3 class="text-sm-center headline">Contact Person</h3>
    <v-divider class="my-3"></v-divider>
    <form data-vv-scope="contactPersonForm">
      <v-layout row wrap justify-center>
        <v-flex xs12 sm6 md6 class="mb-3">
          <v-text-field
            v-model="contact_person.first_name"
            v-validate="'required'"
            data-vv-name="first_name"
            :error-messages="errors.collect('first_name')"
            solo
            name="first_name"
            label="First name"></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md6 class="mb-3">
          <v-text-field
            v-model="contact_person.last_name"
            v-validate="'required'"
            data-vv-name="last_name"
            :error-messages="errors.collect('last_name')"
            solo
            name="last_name"
            label="Last name"></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md6 class="mb-3">
          <v-text-field
            v-model="contact_person.position"
            v-validate="'required'"
            data-vv-name="position"
            :error-messages="errors.collect('position')"
            solo
            name="position"
            label="Position"></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md6 class="mb-3">
          <v-text-field
            v-model="contact_person.department"
            v-validate="'required'"
            data-vv-name="department"
            :error-messages="errors.collect('department')"
            solo
            name="department"
            label="Department"></v-text-field>
        </v-flex>
        <v-flex xs12 class="mb-3">
          <v-text-field solo name="phonenumber" label="Phone number"></v-text-field>
        </v-flex>

        <v-flex xs12 sm8 md6>
          <v-btn @click.prevent="submit('contactPersonForm')" color="primary" block>
            Save
          </v-btn>
        </v-flex>
      </v-layout>
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    contact_person() {
      return this.$store.getters.getCompany;
    },
    step() {
      return this.$store.getters.getStep;
    }
  },
  methods: {
    submit(scope) {
      this.$validator.validateAll(scope).then((result) => {
        if(result) {
          let next_step = parseInt(this.step.active_step + 1);
          let contact_person = {
            first_name: this.contact_person.first_name,
            last_name: this.contact_person.last_name,
            position: this.contact_person.position,
            department: this.contact_person.department,
            phonenumber: this.contact_person.phonenumber
          };
          this.$store.commit('setStep', next_step)
          console.log(next_step)
        }
      });
    }
  }
}
</script>

<style>

</style>
