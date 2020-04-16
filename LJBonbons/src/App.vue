<template>
  <div id="app">
    <Header></Header>
    <!--when box-added is called in OrderForm.vue, it sends data here and addBox method below is called-->
    <OrderForm v-on:box-added = "addBox"> </OrderForm>
    <OrderTable 
      v-bind:boxes="boxes" >

      </OrderTable> 
              
     <Shipping ></Shipping>

  </div>
</template>

<script>
import Header from '@/components/Header'
import OrderForm from './components/OrderForm.vue'
import OrderTable from './components/OrderTable.vue'
import Shipping from './components/Shipping.vue'


export default {
  name: 'app',
  data() {
    return {
      customers: [], //array of customers in data
      boxes: [],//array of boxes for a customer
      
      //name: ''
    }
  },
  components: {
    Header,
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
   
   /* answerChanged(answer)
    
    boxDeleted(box) {
      this.$student_api.deleteStudent(student.id).then( () => {
        this.updateStudents()
      })
    },*/
    /*updateCustomers() {
      this.$customer_api.getAllCustomers().then( customers => {
        this.customers = customers //setting this.customer to C in the Vue model
      })
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
