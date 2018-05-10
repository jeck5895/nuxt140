<template>
  <v-app light>
    <Navbar/>
      <nuxt/>
  </v-app>
</template>
<script>
import Navbar from '~/components/navs/navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style>

</style>
