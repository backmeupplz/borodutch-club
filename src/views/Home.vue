<template lang="pug">
.v-container.pa-4
  // Main content
  v-layout.text-center(column, justify-center, align-center)
    v-flex(xs12, md10)
      .headline.pb-4
        span(v-html='$t("home.info")')
      p {{ $t("home.rules.register") }}
      p {{ $t("home.rules.money") }}
      p {{ $t("home.rules.success") }}

    v-flex.pt-4
      vue-telegram-login(
        mode='callback',
        telegram-login='mamkintrade_bot',
        @callback='onTelegramAuth',
        radius='3',
        :userpic='false'
      )

    v-flex.pt-4
      .caption
        router-link(to='/privacy') {{ $t("home.privacy") }}
</template>

<script lang="ts">
import Vue from 'vue'
import { loginTelegram } from '@/utils/api'
import Component from 'vue-class-component'
import { namespace } from 'vuex-class'
import { User } from '@/models/User'
const { vueTelegramLogin } = require('vue-telegram-login')

const AppStore = namespace('AppStore')
const SnackbarStore = namespace('SnackbarStore')

@Component({
  components: {
    vueTelegramLogin,
  },
})
export default class Home extends Vue {
  @AppStore.Mutation setUser!: (user: User) => void
  @SnackbarStore.Mutation setSnackbarError!: (error: string) => void

  async onTelegramAuth(loginInfo: any) {
    try {
      const user = await loginTelegram(loginInfo)
      this.setUser(user)
      this.$router.replace('cabinet')
    } catch (err) {
      this.setSnackbarError('errors.telegram')
    }
  }
}
</script>
