<template>
  <div>
    <v-container class="main-container" grid-list-lg>
    <!-- Filters -->
    <!-- <v-layout row wrap>

    </v-layout> -->

    <!-- Main content -->
    <v-layout row wrap>
      <v-flex xs12 sm8 md9>
        <v-container grid-list-xs>
          <v-layout row wrap>
            <v-flex xs12 sm12 md12>
            <v-layout row wrap>
              <v-flex xs12 sm8 md9>
                <v-text-field
                  solo
                  label="Search Job title or Keywords"
                  append-icon="search"></v-text-field>
              </v-flex>
              <v-flex xs12 sm4 md3>
                <v-btn class="my-0" block large color="primary">
                  Search
                </v-btn>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex xs12 sm12  md12>
            <div class="jFltrBx">
              <v-spacer></v-spacer>
              <v-btn-toggle v-model="toggle_exclusive">
                  <v-btn flat small>
                    <i class="fas fa-calendar-alt"></i>
                  </v-btn>
                  <v-btn flat small>
                    <i class="fas fa-sort-alpha-up"></i>
                  </v-btn>
                  <v-btn flat small>
                    <i class="fas fa-sort-alpha-down"></i>
                  </v-btn>
                </v-btn-toggle>
            </div>
          </v-flex>

          <v-flex xs12 sm12 md12>
            <JobCard v-for="i in 10" :key="i"/>
          </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex xs12 sm4 md3>
        <Locations/>
        <FeaturedCard/>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>

<script>
import JobCard from '~/components/jobs/jobcard'
import FeaturedCard from '~/components/jobs/featuredCard'
import Locations from '~/components/jobs/locations'

export default {
  data() {
    return {
      toggle_exclusive: 2,
    }
  },
  components: {
    JobCard, FeaturedCard, Locations
  }
}
</script>

<style>
  .jFltrBx {
    display: flex;
  }
</style>
