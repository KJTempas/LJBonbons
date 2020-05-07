<template>
   <!--<div> original version
       <span class="boxType">{{box.boxDescription}}</span>
       <p>
       <input id="orderBox" type = "checkbox"
       v-model="boxOrdered" v-on:change="$emit('addBox', box)">
        </p>   
    </div>-->
<div>
    <span class="boxType">{{box.boxDescription}}</span>
       <p>
       
       <label for="quantity"> Quantity of boxes </label>
       <!-- v-on change means when there is a change the HTML element, the "method" below is called    -->
       <select  v-model="quantitySelected" v-on:change="addBoxAndQuantity"> 
           <option v-for="quantity in quantities" 
            v-bind:value = "quantity"
           v-bind:key ="quantity">{{quantity}}
           </option>
           
         
        </select>  
        
        </p> 

</div>
    
        
</template>

<script>
export default {
    name: 'Box',
    props: { //info sent in from parent
       box: Object

   },
   data() {//this component knows this info;used internally
       
       return {
           boxOrdered: '',
           quantitySelected:'',
           quantities: [0,1,2,3], 
       }
   },

   methods:{ 
       addBoxAndQuantity() {

           let boxAndQuantity = {box: this.box, quantity: this.quantitySelected}
           //sending to OrderForm (parent)- event(where does event name come from?), what is being sent to parent
           this.$emit('box-added', boxAndQuantity)
           
       }

   }
}
</script>

<style scoped>

</style>