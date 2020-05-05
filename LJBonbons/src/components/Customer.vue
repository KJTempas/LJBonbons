<template>
    <div class="customer">
        <div class="alert alert-danger" v-show="errors && errors.length > 0">
            <li v-for="error in errors">{{ error }}</li>
        </div>

              <div class="form-group">
                <label for="Fname">First Name</label>
                <input id="fname" class="form-control" v-model.trim="firstName">
              </div>

                <div class="form-group">
                <label for="Lname">Last Name</label>
                <input id="lname" class="form-control" v-model.trim="lastName">
              </div>

                <div class="form-group">
                <label for="email">Email</label>
                <input id="email" class="form-control" v-model.trim="email">
                </div>

              <div class="form-group">
                <label for="streetAddress">Street Address</label>
                <input id="streetAddress" class="form-control" v-model.trim="streetAddress">
              </div>
             
             <div class="form-group">
                <label for="cityStateZip">City, State, Zip</label>
                <input id="cityStateZip" class="form-control" v-model="cityStateZip">
              </div>

              
             <button class="btn btn-primary" v-on:click.prevent="addCustomer">Add Customer</button>
    </div>
</template>

<script>
export default {
    name: 'Customer',
    data() {
        return {
           firstName: '',
            lastName: '',
            email: '',
            streetAddress: '',
            cityStateZip: '',
            errors: [], 
        }
    },
    methods: {
        addCustomer() {
            this.errors = []
            if (this.firstName && this.lastName && this.email && this.streetAddress && this.cityStateZip) {
                let customer = { firstName: this.firstName, lastName: this.lastName,  email: this.email, streetAddress: this.streetAddress, cityStateZip: this.cityStateZip}
                //console.log(customer) //working this far
                // emit message to parent(App.vue) with new customer object
                this.$emit('add-customer', customer)
            } else {
                this.errors.push('All fields must be filled out.')
            }
           
                
        }
    }
}
</script>

<style>
.customer {
    background-color: rgb(245, 245, 119);
}
</style>