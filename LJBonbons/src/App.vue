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
  
  methods: {
    addBox(newBox) { //called from v-on above
      console.log('new box in app.vue method',newBox)
      this.boxes.push(newBox)
    },

    boxDeleted(box) {
        //this filters the boxes array and returns all boxes that are not equal to this (box), so removes the box from the array
          this.boxes = this.boxes.filter(function(b) {return b !=box})
          },
        
    addCustomer(customer) {
      //call addCustomer method in CustomerService.js
     this.$customer_api.addCustomer(customer).then( customer => {
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
      let finalOrder = { customer: this.customer, boxesOrdered: this.boxes}
      console.log('final order is ', finalOrder)
      this.orders.push(finalOrder)  //add this final order to the array of final orders
      for (box in boxes){ 
      //write boxes to the box table of database  
          this.$box.api.addBox(box).then( box => {
          }).catch(err => {
            let msg = err.response.data.join(', ')
            alert('Error adding box.\n' + msg)
          })
      }
      let order = { datePlaced: NOW, customerID: this.customerID}
      //write order to order table in dbase
      this.$order.api.addOrder(order).then( order => {//write order to orders table of dbase

      }).catch(err => {
            let msg = err.response.data.join(', ')
            alert('Error adding order.\n' + msg)
          })
          //write order Item to orderItem table in dbase
      let OrderItem = { orderID: this.orderID}
          //but there may be several order IDs - need an array of orderIDs
       this.$orderItem.api.addOrderItem(orderItem)   
      
      //clear input fields for customer - can this be done here?
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
