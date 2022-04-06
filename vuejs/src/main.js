import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router' //追加
import store from './store'

new Vue({
  router, //追加
  store,
  render: h => h(App)
}).$mount('#app')

loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')
