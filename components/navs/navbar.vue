<template>
  <v-toolbar fixed dark color="blue">
    <v-toolbar-title class="white--text">
      <img src="https://jobfair-online.net/assets/images/app/jfo_logo_white.png" alt="">
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-sm-and-up"></v-toolbar-side-icon>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn
        active-class="active-link"
        to="/" nuxt
        class="navbar-link navbar-link-home"
        flat>HOME
      </v-btn>
      <v-btn active-class="btn--active active-link" class="navbar-link" nuxt to="/jobs" flat>SEARCH JOBS</v-btn>
      <v-btn v-if="routePath == '/'" @click="goTo($event, '#partners')" class="navbar-link navbar-link-partners" flat>PARTNERS</v-btn>
      <v-btn v-if="routePath == '/'" @click="goTo($event, '#about-us')" class="navbar-link navbar-link-about" flat>ABOUT US</v-btn>
      <v-btn v-if="routePath == '/'" @click="goTo($event, '#contact-us')" class="navbar-link navbar-link-contact" flat>CONTACT US</v-btn>
      <v-menu offset-y min-width="150" left>
        <v-btn slot="activator" class="navbar-link" flat>SIGN-UP</v-btn>
        <v-list>
          <v-list-tile v-for="(item, i) in signup_items" :key="i" :to="item.link" nuxt>
            <v-list-tile-title v-text="item.label"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn active-class="btn--active active-link" to="/login" nuxt class="navbar-link" flat>SIGN-IN</v-btn>
    </v-toolbar-items>
    <v-toolbar-items class="hidden-sm hidden-md-and-up">
      <v-btn ref="homelink" to="/" nuxt icon>
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn ref="partnerslink" v-if="routePath == '/'" @click="$vuetify.goTo('#partners', options)" icon>
        <v-icon>fas fa-briefcase</v-icon>
      </v-btn>
      <v-btn ref="aboutlink" v-if="routePath == '/'" @click="$vuetify.goTo('#about-us', options)" icon>
        <v-icon>fas fa-info-circle</v-icon>
      </v-btn>
      <v-btn ref="contactlink" v-if="routePath == '/'" @click="$vuetify.goTo('#contact-us', options)" icon>
        <v-icon>local_phone</v-icon>
      </v-btn>

      <v-menu offset-y min-width="150" left>
        <v-btn slot="activator" icon>
          <v-icon>fas fa-user-plus</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile v-for="(item, i) in signup_items" :key="i" @click="navigateTo(item.link)">
            <v-list-tile-title v-text="item.label"></v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn icon>
        <v-icon>fas fa-sign-in-alt</v-icon>
      </v-btn>

    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    created() {
    },
    data() {
      return {
        routePath: this.$route.path,
        signup_items: [{
            label: 'Jobseekers',
            link: '/jobseekers/signup'
          },
          {
            label: 'Employers',
            link: '/employers/signup'
          }
        ]
      }
    },
    computed: {
      prevEl() {
        return this.$store.getters.getPrevEl;
      },
      options() {
        return this.$store.getters.getOptions;
      }
    },
    watch:{
      $route: function() {
        this.routePath = this.$route.path
      }
    },
    methods: {
      goTo(e, target) {
        console.log(this.prevEl)
        if (this.prevEl != null) {
          console.log(this.prevEl)
          if (this.prevEl.has) {
            this.prevEl.target.offsetParent.classList.remove('btn--active')
          } else {
            this.prevEl.classList.remove('btn--active')
          }
        }
        e.target.offsetParent.classList.add('btn--active')
        this.$vuetify.goTo(target, this.options)
        this.$store.commit('clearPrevEl');
        this.$store.commit('setPrevEl', e.target.offsetParent); //this.prevEl = e;
      },
      navigateTo(link) {
        window.location = window.location.protocol + "//" + window.location.host + link;
      }
    }
  }

</script>

<style>


</style>
