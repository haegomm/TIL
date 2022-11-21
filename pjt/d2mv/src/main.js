import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import vfmPlugin from 'vue-final-modal'
import VueCarousel from 'vue-carousel'

Vue.use(vfmPlugin)
Vue.use(VueCarousel)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
