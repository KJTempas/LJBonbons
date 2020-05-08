<template>
  <div id="app">
    <Header></Header>
    <!-- this v-on needs to match what is in OrderForm in the template for its child-->
    <OrderForm v-on:box-addedFromOrderForm="addBoxAndQuantity"> </OrderForm>
    
    <OrderTable 
      v-bind:boxesAndQuantities="boxesAndQuantities" 
      
      v-on:delete-box="boxDeleted">
      </OrderTable> 

      <Customer v-on:add-customer ="addCustomer" ></Customer> 
      <button class="btn btn-warning" id="finalize" v-on:click="finalizeOrder">Finalize Order</button>  
      <Summary
        v-bind:customer = "customer"
        v-bind:boxesAndQuantities = "boxesAndQuantities">

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
      customer: {}, //a customer objecty
      boxesAndQuantities: [],//array of boxes and quantity for a customer
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
    addBoxAndQuantity(boxAndQuantity) { //box and quantity coming from OrderForm 
    
      this.boxesAndQuantities.push(boxAndQuantity)
    },

    boxDeleted(boxAndQuantity) {
        //this filters the boxes array and returns all boxes that are not equal to this (box), so removes the box from the array
          this.boxesAndQuantities = this.boxesAndQuantities.filter(function(b) {return b !=boxAndQuantity})
          },

     addCustomer(customer) {
      //call addCustomer method in CustomerService.js to write customer to dbase customer table
     this.customer = customer
     this.$customer_api.addCustomer(customer).then( c => {
       
       this.customer = c
     }).catch(err => {
       let msg = err.response.data.join(', ')
       alert('Error adding customer.\n' + msg)
     })
     
    },   

    finalizeOrder(customer, boxesAndQuantities) {  
      let order = {customerID: this.customer.id, boxesAndQuantities: this.boxesAndQuantities}
      
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
