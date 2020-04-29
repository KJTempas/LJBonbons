<template>
    <div>

        <div class="card add-customer m-2 p-2">
            <div class="order">
              <h4 class="card-title">Enjoy Caribbean flavored bonbons shipped to you or your loved ones</h4>
              <h5 class="card-title"> Each box contains coconut, rum, pina colada, lime, mango and passionfruit flavored bonbons</h5>
             
               <div v-for="box in boxes" v-bind:key=box.id">
                   <Box
                        v-bind:box="box"
                        v-on:isOrdered="updateOrder">
                    </Box>
                
                
                </div>
                
                /*<div class="form-group">
                   <p>Choose your box size and coating<p>
                   <p>1. Select box size</p>
                    <input type="radio" v-model="boxSizeSelected" v-bind:value="small">
                    <label>Small- 12 bonbons for $24</label>
                    <input type="radio" v-model="boxSizeSelected" v-bind:value="large" >
                    <label>Large- 24 bonbons for $48</label>
                </div>

                /*<div class="form-group">
                    <p>2. Select coating type </p>
                    <input type="radio" v-model="coatingTypeSelected" v-bind:value="milkChocolate">
                    <label>Milk Chocolate</label>
                    <input type="radio" v-model="coatingTypeSelected" v-bind:value="darkChocolate" >
                    <label>Dark Chocolate</label>
                </div>-->*/


                 //when button is clicked, go to addBox method
                //<button class="btn btn-success" id="addBox" v-on:click="addBox">Add box to order</button>
             </div> 
        </div>

    </div>
</template>

<script>

import Box from '@/components/Box'

export default { 
    name: 'OrderForm',
    components:{
        Box
    },
    data() {
        return {
            boxes: [],  
        }
    },
    props: {
        id: Number,  //maybe I don't need these anymore?
        boxSize: String,
        coating: String
    },
    methods: {
        addBox() {  //I don't think I need this either? - don't need to create new box?; just emit
           //construct box object
            let newBox = { size: this.boxSizeSelected, coating: this.coatingTypeSelected}
           //send new box object to parent to send to order table to display
            this.$emit('box-added', newBox) 
            //reset radio buttons
            //this.boxSizeSelected = ''  //don't need anymore
            //this.coatingTypeSelected = ''
        },

        buildBoxOptions(boxSize, coating) {
            let boxOptionsUrl = "http://localhost:3000/boxOptions"
            fetch(boxOptionsURL)  //go to the url and fetch the box options
                .then(boxes => {
                    this.boxes = boxes
                // return boxes   
        })
    
   /* computed; {
        totalBoxes() {
            let total = 0
            this.boxes.forEach(function(box) {
                total += boxes.howLong
            })
            return total
            }
         */   
        }
        
    }
}   

</script>

<style>
.order {
    background-color: #a9ddf5;  /* lt blue*/
}


</style>