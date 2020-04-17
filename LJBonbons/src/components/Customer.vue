<template>
    <div>
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
             
             <button class="btn btn-success" v-on:click.prevent="addCustomer">Add Customer</button>
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
        makeCustomer() {
            this.errors = []
            if (this.firstName && this.lastName && this.email) {
                let customer = { firstName: this.firstName, lastName: this.lastName,  email: this.email}
                // emit message to parent(App.vue) with new customer object
                this.$emit('customer-added', customer)
            } else {
                this.errors.push('Name and email are required.')
            }
           
            //clear data fields- don't do this until order is finalize
                //this.firstName= ''
               // this.lastName= ''
               // this.email= ''
                
        }
    }
}
</script>

<style>