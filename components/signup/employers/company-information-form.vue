<template>
  <div>
    <h3 class="headline text-sm-center">Company Information</h3>
    <v-divider class="my-3"></v-divider>
    <form>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm6 md6>
          <v-text-field solo name="company_name" label="Company name"></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md6>
          <v-select
            solo
            label="Company Industry"
            :items="industries"
            item-text="industry_name"
            item-value="id"
          ></v-select>
        </v-flex>

        <v-flex xs12 sm6 md6>
          <v-text-field solo name="address" label="Address"></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md6>
          <v-select
            solo
            label="Location"
            :items="locations"
            item-text="region_name"
            item-value="id"
          ></v-select>
        </v-flex>

        <v-flex xs12>
          <vue-ckeditor></vue-ckeditor>
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
    data() {
      return {
        // config: {
        //   toolbar: [
        //       ['Paste','PasteFromWord','Undo', 'Redo'],
        //       ['Others'],
        //       [ 'Bold', 'Italic', 'Heading' ],
        //       ['Link'],
        //       ['NumberedList', 'BulletedList','Source','Blockquote' ,'Preview'],
        //       ['Indent','Align']
        //   ],
        //   extraPlugins:'placeholder',
        //   placeholder:'<ul><li>Male / Female</li><li>Graduate of Internal Auditing / Accountancy or any related Business course</li><li>With at least minimum of 6 months experience on the same field but not necessary</li><li>With above average of communication skills in both oral and written English</li><li>Proficient in MS Office</li><li>Willing to be assigned in Pasig City and willing to do periodic travels to Batangas, Laguna, Cavite and Clark areas</li><li>Open to all fresh graduates&nbsp;</li></ul>',
        //   height: 200
        // }
      }
    },
    computed: {
      industries() {
        return this.$store.getters.getIndustries;
      },
      locations() {
        return this.$store.getters.getLocations;
      }
    },
    components: {

    }
  }
</script>

<style>


</style>
