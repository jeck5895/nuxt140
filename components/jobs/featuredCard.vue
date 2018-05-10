<template>
  <v-card class="pa-3 wrapper mb-1">
    <v-container grid-list-sm>
      <v-layout row wrap>
        <v-flex class="pa-0" xs12 sm12 md12>
          <h3 class="subheading">Featured Companies</h3>
          <v-divider class="mt-2"></v-divider>
          <div class="aDsBx">
            <v-container grid-list-xs>
              <v-layout row wrap>
                <v-flex class="" xs12 sm8 md6 v-for="(item, i) in featured_companies" :key="i">
                  <div class="adsImgBx">
                    <img :src="item.img" alt="">
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      featured_companies: [
        {
          img: 'https://jobfair-online.net/assets/images/uploads/company_logos/147ef43ea174c82624e742c252ce929f/1525067248180x180.jpg'
        },
        {
          img: 'https://jobfair-online.net/assets/images/uploads/company_logos/b2fc287497b0acfde1591f5e35d26c00/1524132490123.jpg',
        },
        {
          img: 'https://jobfair-online.net/assets/images/uploads/company_logos/21db9d49b0c12c46f9b68fb050ea0834/1524626232saviour_logo.jpg'
        },
        {
          img: 'https://jobfair-online.net/assets/images/uploads/company_logos/21db9d49b0c12c46f9b68fb050ea0834/1524626232saviour_logo.jpg'
        },
        {
          img: 'https://jobfair-online.net/assets/images/uploads/company_logos/dcdaa9953c7c25160d7e88a0d1865c02/1524017906Archon_logo.JPG'
        },
        {
          img: 'https://jobfair-online.net/assets/images/uploads/company_logos/53f1eb9a599eab57bc2aebcfc3908983/1523462488Callmax_Logo1.jpg'
        },
        {
          img: 'https://jobfair-online.net/assets/images/uploads/company_logos/2e74b3559061a5a7cc3a66cd2ca3bb3a/1523873813univerge_icon.jpg'
        }
      ]
    }
  }
}
</script>

<style>
  .adsImgBx {
    width: 110px;
    height: 95px;
    position: relative;
    line-height: 8rem;
    overflow: hidden;
  }
  .adsImgBx img {
    width: 100%;
    height: auto;
    vertical-align: middle;
  }
</style>
