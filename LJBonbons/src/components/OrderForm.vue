<template>
    <div>

        <div class="card add-customer m-2 p-2">
            <div class="order">
              <h4 class="card-title">Enjoy Caribbean flavored bonbons shipped to you or your loved ones</h4>
              <h5 class="card-title"> Each box contains coconut, rum, pina colada, lime, mango and passionfruit flavored bonbons</h5>
             
               <Box v-for="box in boxes" v-bind:key="box.id"
                   
                        v-bind:box="box"
                        v-on:isOrdered="updateOrder">
                </Box>
                
                
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

        buildBoxOptions() {
            let boxOptionsUrl = "/api/boxes"
            fetch(boxOptionsUrl)  //go to the url and fetch the box options
                .then(resp =>resp.json() )
                .then(boxes => {
                    console.log("boxes are here", boxes)
                    this.boxes = boxes
                   
                })
          
        },

    },
    mounted(){//means do this on loading of the app
     this.buildBoxOptions()
   }
}   

</script>

<style>
.order {
    background-color: #a9ddf5;  /* lt blue*/
}


</style>