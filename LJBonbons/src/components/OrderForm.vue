<template>
    <div>
        <!-- write template here -->
        <div class="alert alert-danger" v-show="errors && errors.length > 0">
            <li v-for="error in errors">{{ error }}</li>
        </div>

        <div class="card add-student m-2 p-2">
            <form>
              <h4 class="card-title">Enjoy Caribbean flavored bonbons shipped to you or your loved ones</h4>
              <h5 class="card-title"> Each box contains coconut, rum, pina colada, lime, mango and passionfruit flavored bonbons</h5>

              <div class="form-group">
                <label for="name">Customer Name</label>
                <input id="name" class="form-control" v-model.trim="CustomerName">
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input id="email" class="form-control" v-model.trim="email">
              </div>

                <div class="form-group">
                    <p>1. Select box size</p>
                    <input type="radio" v-model="choice" v-bind:value="small" v-on:change='sizeSelected(id, choice)'>
                    <label>Small</label>
                    <input type="radio" v-model="choice" v-bind:value="large" v-on:change='sizeSelected(id, choice)'>
                    <label>Large</label>
                </div>

                <div class="form-group">
                    <p>2. Select coating type </p>
                    <input type="radio" v-model="choice" v-bind:value="milkChocolate" v-on:change='coatingSelected(id, choice)'>
                    <label>Milk Chocolate</label>
                    <input type="radio" v-model="choice" v-bind:value="darkChocolate" v-on:change='coatingSelected(id, choice)'>
                    <label>Dark Chocolate</label>
                </div>

              <button class="btn btn-primary" v-on:click.prevent="addStudent">Add</button>
            </form>

        </div>

    </div>
</template>

<script>
//create and export component here
export default { 
    name: 'OrderForm',
    data() {
        return {
            customerName: '',
            email: '',
            errors: []
        }
    },
    methods: {
        addCustomer() {
            this.errors = []
            if (this.newCustomerName && this.email) {
                let customer = { name: this.newCustomrName, email: this.email, present: false}
                // emit message to parent with new student
                this.$emit('customer-added', customer)
                this.newCustomerName= ''
                this.email= ''
            } else {
                this.errors.push('Name and email are required.')
            }
        }
    }
}
</script>

<style>
/* write any styles for this component here */
</style>