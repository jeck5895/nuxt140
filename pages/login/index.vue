<template>
    <v-container row wrap class="main-container">
        <v-layout row wrap justify-center>
            <v-flex xs12 md4 >
                <v-card class="pa-1">
                  <form action="">
                    <v-text-field solo label="Username"></v-text-field>
                    <v-text-field solo label="Password" type="password"></v-text-field>
                  </form>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        layout:'default'
    }
</script>

<style>
    .main-container {
        margin-top: 5rem;
    }
</style>
