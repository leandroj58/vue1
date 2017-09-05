<template lang="jade">
    #app
        img(src='./dist/logo.png')
          h1 {{ msg }}
        select(v-model="selectedCountry")
            option(v-for="country in countries" v-bind:value="country.value") {{country.name}}
        h2 Artistas
        spinner(v-show="loading")
        ul
            artist(v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid")

</template>


<script>
import Spinner from './components/Spinner.vue'
import Artist from './components/Artist.vue'
import getArtists from './api'

export default {
  name: 'app',
  data () {
    return {
        msg: 'Lean',
        artists: [],
        countries: [
            { name: 'Argentina', value: 'argentina' },
            { name: 'colombia', value: 'colombia' },
            { name: 'España', value: 'spain' }
        ],
        selectedCountry: "colombia",
        loading: true
    }
  },
  components: {
        Artist,
        Spinner
  },
  methods:{
        refreshArtist() {
          this.loading = true
          const  _this = this
          this.artists = []
          getArtists(_this.selectedCountry)
                    .then (function (artists) {
                              _this.loading = false
                              _this.artists = artists
                    })
        }
  },
  mounted() {
  this.refreshArtist()
  },
  watch:{
            selectedCountry() {
                      this.refreshArtist()
            }
  }
}
</script>

<style lang="stylus">
  @import './scss/main.stylus'
</style>
