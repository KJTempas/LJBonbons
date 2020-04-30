import Vue from 'vue'
import App from './App.vue'
//to include Boostrap styles and style sheets
import BootstrapVue from 'bootstrap-vue'

//importing Services files
import CustomerAPIService from '@/services/CustomerService'
import ordersAPIService from '@/services/ordersService'
import orderItemsAPIService from '@/services/orderItemsService'

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Vue.config.productionTip = false
//adding StudentServices to the Vue class prototype, so is accessible
Vue.prototype.$customer_api = CustomerAPIService
Vue.prototype.$orderItems_api = orderItemsAPIService
Vue.prototype.$orders_api = ordersAPIService

new Vue({
  render: h => h(App),
}).$mount('#app')
