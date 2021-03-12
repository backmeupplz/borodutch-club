<template lang="pug">
v-app(
  :dark='$store.state.dark',
  :class='$store.state.dark ? "grey darken-4" : "grey lighten-4"'
)
  cookie-law(
    theme='blood-orange',
    buttonText='Ясно!',
    message='Клуб использует кукисы, чтобы сохранять информацию о вашем логине. Клуб не следит за вами.'
  )
  Navbar
  Snackbar
  v-main
    router-view
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '@/components/Navbar.vue'
import Snackbar from '@/components/Snackbar.vue'
import CookieLaw from 'vue-cookie-law'
import Component from 'vue-class-component'
import { namespace } from 'vuex-class'

const SnackbarStore = namespace('SnackbarStore')

@Component({ components: { Navbar, CookieLaw, Snackbar } })
export default class App extends Vue {
  @SnackbarStore.Mutation hideSnackbar!: () => void

  get style() {
    return {
      'background-color': '#303030',
    }
  }

  created() {
    this.$vuetify.theme.dark = true

    const query = document.querySelector('meta[name="theme-color"]')
    if (query) {
      query.setAttribute('content', '#303030')
    }

    this.hideSnackbar()
  }
}
</script>
