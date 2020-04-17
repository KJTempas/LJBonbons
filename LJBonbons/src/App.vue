<template>
  <div id="app">
    <Header></Header>
    <!--when box-added is called in OrderForm.vue, it sends data here and addBox method below is called-->
    <OrderForm v-on:box-added = "addBox"> </OrderForm>
    <button class="btn btn-warning" id="finalize" v-on:click="finalizeOrder">Finalize Order</button>
    <OrderTable 
      v-bind:boxes="boxes" 
      v-on:finalize-order = "finalizeOrder"
      v-on:delete-box="boxDeleted">
      </OrderTable> 
      <Customer> </Customer>        
     <Shipping ></Shipping>

  </div>
</template>

<script>
import Header from '/components/Header'
import Customer from '/components/Customer.vue'
import OrderForm from './components/OrderForm.vue'
import OrderTable from './components/OrderTable.vue'
import Shipping from './components/Shipping.vue'


export default {
  name: 'app',
  data() {
    return {
      customers: [], //array of customers in data
      boxes: [],//array of boxes for a customer
      
      
    }
  },
  components: {
    Header,
    Customer,
    OrderForm,
    OrderTable,
    Shipping
  },
  /*mounted() {
    this.updateCustomers() //call updateCustomers method
  },*/
  methods: {
    addBox(newBox) { //called from v-on above
      console.log('new box in app.vue method',newBox)
      this.boxes.push(newBox)
    },

    boxDeleted(box) {
          this.boxes = this.boxes.filter(function(b) {return b !=boxes})
          }
        },

    newCustomerAdded(customer) {
      //call addCustomer method in CustomerService.js
     this.$customer_api.addCustomer(customer).then( customer => {
       //after req is complete, call updateCustomers to update array
       this.updateCustomers()
     }).catch(err => {
       let msg = err.response.data.join(', ')
       alert('Error adding customer.\n' + msg)
     })
    },
  
  
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
