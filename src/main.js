import Vue from 'vue'
import VueNumber from 'vue-number-animation'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueNumber)

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app')
