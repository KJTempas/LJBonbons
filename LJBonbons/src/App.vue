<template>
  <div id="app">
    <Header></Header>
    <OrderForm v-on:box-added="addBox"> </OrderForm>
    
    <OrderTable 
      v-bind:boxes="boxes" 
      v-on:delete-box=
      "boxDeleted">
      </OrderTable> 

      <Customer v-on:add-customer ="addCustomer" ></Customer> 
      <button class="btn btn-warning" id="finalize" v-on:click="finalizeOrder">Finalize Order</button>      
     

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Customer from './components/Customer.vue'
import OrderForm from './components/OrderForm.vue'
import OrderTable from './components/OrderTable.vue'



export default {
  name: 'app',
  data() {
    return {
      customer: {}, //array of customers in data //but this is an object - just one customer
      boxes: [],//array of boxes for a customer
      orders: []

    }
  },
  components: {
    Header,
    Customer,
    OrderForm,
    OrderTable,

  },
  
  methods: {
    addBox(box) { //box coming from OrderForm 
      this.boxes.push(box)
    },

    boxDeleted(box) {
        //this filters the boxes array and returns all boxes that are not equal to this (box), so removes the box from the array
          this.boxes = this.boxes.filter(function(b) {return b !=box})
          },

     addCustomer(customer) {
      //call addCustomer method in CustomerService.js to write customer to dbase customer table
     this.customer = customer
     this.$customer_api.addCustomer(customer).then( c => {
       console.log('in App.vue - a customer', customer) //works
     }).catch(err => {
       let msg = err.response.data.join(', ')
       alert('Error adding customer.\n' + msg)
     })
     
    },   

    finalizeOrder(customer, boxes) {  
      console.log('firstName', this.customer.firstName) //works
      //problem - don't have customerID as it is autoassigned - have to get it?
      //this.$customer_api.getCustomer(customer).then
      let order = {customerID: this.customer.customerID, boxes: this.boxes}
      console.log('order just before sending to api.js is ' ,  order) //undefined due to customerID
      this.$orders_api.addOrder(order).then( order => {//write order to order table of dbase

    
    })
    },    
   //clear entry fields
   
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
