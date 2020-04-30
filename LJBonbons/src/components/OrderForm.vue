<template>
    <div>

        <div class="card add-customer m-2 p-2">
            <div class="order">
              <h4 class="card-title">Enjoy Caribbean flavored bonbons shipped to you or your loved ones</h4>
              <h5 class="card-title"> Each box contains coconut, rum, pina colada, lime, mango and passionfruit flavored bonbons</h5>
             <h5> Check a box you'd like to order</h5>
               <Box v-for="box in boxes" v-bind:key="box.id"
                   
                        v-bind:box="box"
                        v-on:addBox="addBox">
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
        }
    },
    props: {
        
    },
    methods: {
        addBox(box){//send to parent to sent to orderTable to display
            this.$emit('box-added', box)
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