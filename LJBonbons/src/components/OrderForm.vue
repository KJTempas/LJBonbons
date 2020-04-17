<template>
    <div>
    
    
        <div class="card add-customer m-2 p-2">
            <div class="order">
              <h4 class="card-title">Enjoy Caribbean flavored bonbons shipped to you or your loved ones</h4>
              <h5 class="card-title"> Each box contains coconut, rum, pina colada, lime, mango and passionfruit flavored bonbons</h5>
             

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
           //construct box object
            let newBox = { size: this.boxSizeSelected, coating: this.coatingTypeSelected}
           //send new box object to parent to send to order table to display
            this.$emit('box-added', newBox) 
            //reset radio buttons
            this.boxSizeSelected = ''
            this.coatingTypeSelected = ''
        },

        finalizeOrder() {
            customer = makeCustomer()  //call method below
            //combine customer + boxes together in order
            //need to get boxes from parent(App.vue) - they are in props
            let order = { customer: this.customer, boxes: this.boxes}
            //emit back to parent (App.vue)
            //this.$emit('order')
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