<template>
    <div style="margin-top:5rem;">
        <v-card color="grey lighten-4" flat>
            <v-container fluid class="">
                <v-layout row justify-center>
                    <v-flex xs6>
                        <v-text-field
                        name="input-1-3"
                        label="Search Jobs | Companies | Jobs by Location"
                        solo
                        append-icon="search"
                        ></v-text-field>
                        <!-- :type="'password'" -->
                    </v-flex>
                    <v-flex xs2>
                        <v-btn class="my-0" color="primary" dark large>Search</v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                keyword: ''
            }
        }
    }
</script>

<style>

</style>
