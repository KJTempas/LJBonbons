<template>
    <div>
        <!-- write template here -->
        <div class="alert alert-danger" v-show="errors && errors.length > 0">
            <li v-for="error in errors">{{ error }}</li>
        </div>

        <div class="card add-customer m-2 p-2">
            <div class="order">
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
                    <input type="radio" v-model="boxSizeSelected" v-bind:value="small">
                    <label>Small- 12 bonbons for $24</label>
                    <input type="radio" v-model="boxSizeSelected" v-bind:value="large" >
                    <label>Large- 24 bonbons for $48</label>
                </div>

                <div class="form-group">
                    <p>2. Select coating type </p>
                    <input type="radio" v-model="coatingTypeSelected" v-bind:value="milkChocolate"><!-- v-on:change='coatingSelected(choice)'>-->
                    <label>Milk Chocolate</label>
                    <input type="radio" v-model="coatingTypeSelected" v-bind:value="darkChocolate" ><!--v-on:change='coatingSelected(choice)'>-->
                    <label>Dark Chocolate</label>
                </div>
                <!-- when button is clicked, go to addBox method-->
              <button class="btn btn-primary" v-on:click.prevent="addBox">Add Box to Order</button>
              
             
            </div>

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
            //boxes: [],
            boxSizeSelected: '',
            coatingTypeSelected: '',
            small: 'small',
            large: 'large',
            milkChocolate: 'milkChocolate',
            darkChocolate: 'darkChocolate'
        }
    },
    methods: {
        
        addBox() {
           
            let newBox = { size: this.boxSizeSelected, coating: this.coatingTypeSelected}
            console.log('new box in OrderForm.vue' , newBox)//flashes on screen briefly
            this.$emit('box-added', newBox) //send new box object to parent to send to order table to display
            //reset radio buttons
            this.boxSizeSelected = ''
            this.coatingTypeSelected = ''
        },

        finalizeOrder() {
            this.errors = []
            if (this.firstName && this.lastName && this.email) {
                let customer = { firstName: this.firstName, lastName: this.lastName,  email: this.email}
                // emit message to parent with new customer
                this.$emit('customer-added', customer)
            } else {
                this.errors.push('Name and email are required.')
            }
            //for box in boxes
            //clear data fields
                this.firstName= ''
                this.lastName= ''
                this.email= ''
                //clear radio buttons

            //todo - write boxes to database
        },

    } ,
    computed: {
        totalBoxes() {
            let total = 0
            this.boxes.forEach(function(box) {
                total += boxes.howLong
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