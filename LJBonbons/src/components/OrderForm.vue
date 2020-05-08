<template>
    <div>

        <div class="card add-customer m-2 p-2">
            <div class="order">
              <h4 class="card-title">Enjoy Caribbean flavored bonbons shipped to you</h4>
              <h5 class="card-title"> Each box contains coconut, rum, pina colada, lime, mango and passionfruit flavored bonbons</h5>
             <h5> Select the type and quantity of boxes you'd like to order</h5>
             <!-- v-on:event- this needs to match method in parent template = "method below called" 
             when an event is emitted, call the method below -->
               <Box v-for="box in boxes" v-bind:key="box.id"
                   
                        v-bind:box="box"
        
                        v-on:box-added="addBoxAndQuantity">
                </Box>
                      
        </div>
        </div>

    </div>
</template>

<script>

import Box from '@/components/Box'

export default { 
    name: 'OrderForm',
    components:{Box},
    data() {
        return {
            boxes: [],
            boxesAndQuantity: [], 

        }
    },
    props: {
        
    },
    methods: {
        
        addBoxAndQuantity(boxAndQuantity) {  //option to send info from Box.vue to app.vue
            
            this.$emit('box-addedFromOrderForm', boxAndQuantity) //send it on to App.vue
            
        },
        

        buildBoxOptions() {
            let boxOptionsUrl = "/api/boxes"
            fetch(boxOptionsUrl)  //go to the url and fetch the box options
                .then(resp =>resp.json() )
                .then(boxes => {
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