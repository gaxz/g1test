import Vue from 'vue'
import App from './App.vue'

import store from './store'

import router from "./router";

import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

import VModal from 'vue-js-modal'
Vue.use(VModal, { dynamic: true })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
