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
      <Summary
        v-bind:customer = "customer"
        v-bind:boxes = "boxes">

         </Summary>    
     

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Customer from './components/Customer.vue'
import OrderForm from './components/OrderForm.vue'
import OrderTable from './components/OrderTable.vue'
import Summary from './components/Summary.vue'



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
    Summary

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
       //console.log('in App.vue - a customer', customer) //works
       console.log(c)
       this.customer = c
     }).catch(err => {
       let msg = err.response.data.join(', ')
       alert('Error adding customer.\n' + msg)
     })
     
    },   

    finalizeOrder(customer, boxes) {  
      let order = {customerID: this.customer.id, boxes: this.boxes}
      
      this.$orders_api.addOrder(order).then( order => {//write order to order table of dbase
      //writing to the orderItems table is done at the server level
    })
    },    

   
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
