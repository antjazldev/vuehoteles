// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
const App = () => import('./App')
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
const AlertCmp = () => import('./components/Shared/Alert.vue')

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.component('app-alert', AlertCmp)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBOzLm8is35jyAkxpIk0nFzXEQ2RNPPmvQ',
      authDomain: 'hoteles-a6cf4.firebaseapp.com',
      databaseURL: 'https://hoteles-a6cf4.firebaseio.com',
      projectId: 'hoteles-a6cf4',
      storageBucket: 'hoteles-a6cf4.appspot.com',
      messagingSenderId: '658862862830',
      appId: '1:658862862830:web:0a7673df923a0a403c9eff',
      measurementId: 'G-4H44Q0DES7'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  }
})
