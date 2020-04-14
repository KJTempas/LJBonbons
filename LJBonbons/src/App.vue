<template>
  <div id="app">
    <Header></Header>
    <OrderForm v-on:customer-added="newCustomerAdded"></OrderForm>
    <OrderTable 
      v-bind:customers="customers" 

     v-on:answer-changed = "answerChanged">
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
      message: '',
      name: ''
    }
  },
  components: {
    Header,
    OrderForm,
    OrderTable,
    Shipping
  },
  mounted() {
    this.updateCustomers() //call updateCustomers method
  },
  methods: {
    newCustomerAdded(customer) {
      //call addCustomer method in StudentService.js
     this.$customer_api.addCustomer(customer).then( customer => {
       //after req is complete, call updateCustomers to update array
       this.updateCustomers()
     }).catch(err => {
       let msg = err.response.data.join(', ')
       alert('Error adding customer.\n' + msg)
     })
    },
    addBox()
   /* answerChanged(answer)
    studentArrivedOrLeft(student) {
      this.$student_api.updateStudent(student).then( () => {
        this.message = student.present ? 'Welcome,' : 'Goodbye, '
        this.name = student.name
        //call method below
        this.updateStudents()
      })
    },
    studentDeleted(student) {
      this.$student_api.deleteStudent(student.id).then( () => {
        this.updateStudents()
      })
    },*/
    updateCustomers() {
      this.$customer_api.getAllCustomers().then( customers => {
        this.customers = customers //setting this.customer to C in the Vue model
      })
    }
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
