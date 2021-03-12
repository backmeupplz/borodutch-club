import Vue from 'vue'
import App from '@/App.vue'
import router from '@/plugins/router'
import store from '@/store'
import '@/plugins/facebook'
import '@/plugins/google'
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = true

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
