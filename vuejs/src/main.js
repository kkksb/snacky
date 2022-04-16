// src/main.js
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import '@mdi/font/css/materialdesignicons.css' // この行を追加
import '@/assets/base.css'

new Vue({
  router,
  vuetify,
  components: { App },
  template: '<App/>'
}).$mount('#app')
