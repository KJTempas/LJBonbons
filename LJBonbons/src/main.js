import Vue from 'vue'
import App from './App.vue'
//to include Boostrap styles and style sheets
import BootstrapVue from 'bootstrap-vue'

//importing StudentServices 
import CustomerAPIService from '@/services/CustomerService'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Vue.config.productionTip = false
//adding StudentServices to the Vue class prototype, so is accessible
Vue.prototype.$customerService = CustomerAPIService

new Vue({
  render: h => h(App),
}).$mount('#app')
