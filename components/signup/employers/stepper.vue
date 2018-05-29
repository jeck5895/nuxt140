<template>
  <div>
    <v-stepper v-model="step.active_step">
      <v-stepper-header>
        <template v-for="i in steps">
            <v-stepper-step
             :key="`${i.id}-step`"
             :step="i.id"
             :complete="step.active_step > i.id" editable
             >
             {{ i.label }}
             </v-stepper-step>
            <v-divider :key="i.id"></v-divider>
        </template>
      </v-stepper-header>
    </v-stepper>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    step() {
      return this.$store.getters.getStep;
    },
    steps() {
      return this.$store.getters.getSteps;
    }
  }
}
</script>

<style>

</style>
