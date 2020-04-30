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
  
  methods: {
    addBox(box) { //box coming from OrderForm 
      this.boxes.push(box)
    },

    boxDeleted(box) {
        //this filters the boxes array and returns all boxes that are not equal to this (box), so removes the box from the array
          this.boxes = this.boxes.filter(function(b) {return b !=box})
          },
        
    addCustomer(customer) {
      //call addCustomer method in CustomerService.js
     this.$customer_api.addCustomer(customer).then( c => {
       //after req is complete, call updateCustomers to update array
       //this.updateCustomers()
       console.log('in App.vue - a customer', customer)
     }).catch(err => {
       let msg = err.response.data.join(', ')
       alert('Error adding customer.\n' + msg)
     })
    },

    finalizeOrder(customer, boxes) {
    //combine customer + boxes together in order
    //customer is already written to dbase on line 58; should it be here?
    let order = {customerID: this.customerID} //datePlaced: NOW  gives error; orderID is automatic
      //this.orders.push(finalOrder)  //add this final order to the array of final orders
    
      //write order to order table in dbase
      this.$orders_api.addOrder(order).then( order => {//write order to order table of dbase

      }).catch(err => {
            let msg = err.response.data.join(', ')
            alert('Error adding order.\n' + msg)
          })

          //write order Item to orderItem table in dbase
          boxes.forEach(box); {
      let OrderItem = { orderID: this.orderID, boxID: this.boxID}
          
       this.$orderItems_api.addOrderItem(orderItem).then( orderItem => {

       }).catch(err => {
         let msg = err.response.data.join(',')
         alert('Error adding orderItem.\n' + msg)
       })  
          }
      //clear input fields for customer - 
     // this.firstName= ''
      //this.lastName= ''
      //this.email= ''

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
