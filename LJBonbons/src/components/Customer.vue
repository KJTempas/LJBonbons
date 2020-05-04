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
            errors: [], 
        }
    },
    methods: {
        addCustomer() {
            this.errors = []
            if (this.firstName && this.lastName && this.email) {
                let customer = { firstName: this.firstName, lastName: this.lastName,  email: this.email}
                //console.log(customer) //working this far
                // emit message to parent(App.vue) with new customer object
                this.$emit('add-customer', customer)
            } else {
                this.errors.push('Name and email are required.')
            }
           
            //clear data fields- don't do this until order is finalized
               // this.firstName= ''
                //this.lastName= ''
                //this.email= ''
                
        }
    }
}
</script>

<style>
.customer {
    background-color: rgb(245, 245, 119);
}
</style>