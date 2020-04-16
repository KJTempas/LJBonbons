<template>
    <div>
        <!-- write template here -->
        <div class="alert alert-danger" v-show="errors && errors.length > 0">
            <li v-for="error in errors">{{ error }}</li>
        </div>

        <div class="card add-customer m-2 p-2">
            <form class="order">
              <h4 class="card-title">Enjoy Caribbean flavored bonbons shipped to you or your loved ones</h4>
              <h5 class="card-title"> Each box contains coconut, rum, pina colada, lime, mango and passionfruit flavored bonbons</h5>
                
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
                    <p>Choose your box size and coating<p>
                    <p>1. Select box size</p>
                    <input type="radio" v-model="boxSizeChoice" v-bind:value="small" v-on:change='sizeSelected(choice)'>
                    <label>Small- 12 bonbons for $24</label>
                    <input type="radio" v-model="boxSizeChoice" v-bind:value="large" v-on:change='sizeSelected(choice)'>
                    <label>Large- 24 bonbons for $48</label>
                </div>

                <div class="form-group">
                    <p>2. Select coating type </p>
                    <input type="radio" v-model="coatingChoice" v-bind:value="milkChocolate" v-on:change='coatingSelected(choice)'>
                    <label>Milk Chocolate</label>
                    <input type="radio" v-model="coatingChoice" v-bind:value="darkChocolate" v-on:change='coatingSelected(choice)'>
                    <label>Dark Chocolate</label>
                </div>

              <button class="btn btn-primary" v-on:click.prevent="addBox">Add Box to Order</button>
              
             
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
            firstName: '',
            lastName: '',
            email: '',
            errors: [],
            sizeSelected: '',
            coatingSelected: ''
        }
    },
    methods: {
        
        addBox() {
            let box = { size: this.sizeSelected, coating: this.coatingSelected}
            this.$emit('box-added', box) //send new box object to parent to send to order table to display
        },

        finalizeOrder() {
            this.errors = []
            if (this.firstName && this.lastName && this.email) {
                let customer = { firstName: this.firstName, lastName: this.lastName,  email: this.email}
                //todo - write to database

                // emit message to parent with new student
                //this.$emit('customer-added', customer)
                //clear data fields
                this.firstName= ''
                this.lastName= ''
                this.email= ''
            } else {
                this.errors.push('Name and email are required.')
            }
            //todo - write boxes to database
        },

    } ,
    computed: {
        totalBoxes() {
            let total = 0
            this.boxes.forEach(function(box) {
                total+= boxes.howLong
            })
            return total
            }
            
        }
    }

</script>

<style>
.order {
    background-color: #a9ddf5;  /* lt blue*/
}


</style>