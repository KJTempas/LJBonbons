<template>
  <div id="app">
    <Header></Header>
    <!--when box-added is called in OrderForm.vue, it sends data here and addBox method below is called-->
    <OrderForm v-on:box-added = "addBox"> </OrderForm>
    
    <OrderTable 
      v-bind:boxes="boxes" 
      v-on:delete-box= "boxDeleted">
      </OrderTable> 

      <Customer> </Customer> 
      <button class="btn btn-warning" id="finalize" v-on:click="finalizeOrder">Finalize Order</button>      
     <Shipping ></Shipping>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Customer from './components/Customer.vue'
import OrderForm from './components/OrderForm.vue'
import OrderTable from './components/OrderTable.vue'
import Shipping from './components/Shipping.vue'


export default {
  name: 'app',
  data() {
    return {
      customer: {}, //array of customers in data
      boxes: [],//array of boxes for a customer
      orders: []

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
          this.boxes = this.boxes.filter(function(b) {return b !=box})
          },
        

    addCustomer(customer) {
      //call addCustomer method in CustomerService.js
     this.$customer_api.addCustomer(customer).then( customer => {
       //after req is complete, call updateCustomers to update array
       this.updateCustomers()
       console.log('in App.vue - a customer', customer)
     }).catch(err => {
       let msg = err.response.data.join(', ')
       alert('Error adding customer.\n' + msg)
     })
    },

    finalizeOrder(customer, boxes) {
    //combine customer + boxes together in order
      let finalOrder = { customer: this.customer, boxesOrdered: this.boxes}
      console.log('final order is ', finalOrder)
      this.orders.push(finalOrder)  //add this final order to the array of final orders
    },/*
    computed: {
      finalizeOrder(customer, boxes) {
    //combine customer + boxes together in order
      let order = { customer: this.customer, boxesOrdered: this.boxes}
      console.log('final order is ', finalOrder)
      this.orders.push(order)  //add this final order to the array of final orders
    }*/
      
    }

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
