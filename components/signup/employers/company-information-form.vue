<template>
  <div>
    <h3 class="headline text-sm-center">Company Information</h3>
    <v-divider class="my-3"></v-divider>
    <form data-vv-scope="companyInfoForm">
      <v-layout row wrap justify-center>
        <v-flex xs12 sm6 md6 class="mb-3">
          <v-text-field
            v-model="company.name"
            solo
            name="company_name"
            label="Company name"
            data-vv-name="company_name"
            v-validate="'required'"
            :error-messages="errors.collect('company_name')"
            ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md6 class="mb-3">
          <v-select
            v-model="company.industry"
            solo
            label="Company Industry"
            :items="industries"
            item-text="industry_name"
            item-value="id"
            data-vv-name="industry"
            v-validate="'required'"
            :error-messages="errors.collect('industry')"
          ></v-select>
        </v-flex>

        <v-flex xs12 sm6 md6 class="mb-3">
          <v-text-field
            v-model="company.address"
            solo
            name="address"
            label="Address"
            data-vv-name="address"
            v-validate="'required'"
            :error-messages="errors.collect('address')"
            ></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md6 class="mb-3">
          <v-select
            v-model="company.location"
            solo
            label="Location"
            :items="locations"
            item-text="region_name"
            item-value="id"
            data-vv-name="location"
            v-validate="'required'"
            :error-messages="errors.collect('location')"
          ></v-select>
        </v-flex>

        <v-flex xs12>
          <vue-ckeditor v-model="company.description" :config="config"></vue-ckeditor>
        </v-flex>
        <v-flex xs12 sm8 md6>
          <v-btn @click.prevent="submit('companyInfoForm')" color="primary" block>
            Save
          </v-btn>
        </v-flex>
      </v-layout>
    </form>
  </div>
</template>

<script>

  export default {
    $_veeValidate: {
      validator: 'new'
    },
    data() {
      return {
        config: {
          toolbar: [
              ['Paste','PasteFromWord','Undo', 'Redo'],
              ['Others'],
              [ 'Bold', 'Italic', 'Heading' ],
              ['Link'],
              ['NumberedList', 'BulletedList','Source','Blockquote' ,'Preview'],
              ['Indent','Align']
          ],
          extraPlugins:'placeholder',
          placeholder:'',
          height: 200
        }
      }
    },
    computed: {
      company() {
        return this.$store.getters.getCompany;
      },
      industries() {
        return this.$store.getters.getIndustries;
      },
      locations() {
        return this.$store.getters.getLocations;
      },
      step () {
        return this.$store.getters.getStep;
      }
    },
    methods: {
      submit(scope) {
          this.$validator.validateAll(scope).then((result) => {
            if(result) {
              let next_step = parseInt(this.step.active_step + 1);
              let company = {
                name: this.company.name,
                industry: this.company.industry,
                address: this.company.address,
                location: this.company.location,
                description: this.company.description
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
