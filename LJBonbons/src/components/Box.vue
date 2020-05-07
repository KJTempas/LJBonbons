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
       <!--<input class="quantityOptions">-->
       <label for="quantity"> Quantity of boxes </label>
       <select  v-model="quantitySelected"> <!-- link to data below-->
           <option v-for="quantity in quantities" 
            v-bind:value = "quantity"
           v-bind:key ="quantity">{{quantity}}
           </option>
           <!-- this sends box to OrderForm.vue -->
         <v-on:change="addBoxAndQuantity">
        
        </select>  <!-- need to send quantity also!! -->
        <!--v-on:change="addBoxAndQuantity">-->
       <!--v-model="boxOrdered"  v-on:change="$emit('addBox', box, quantity)">-->
        </p> 

</div>
    
        
</template>

<script>
export default {
    name: 'Box',
    props: {
       box: Object

   },
   data() {
       
       return {
           boxOrdered: '',
           quantitySelected:'',
           quantities: [0,1,2,3],
           
       }
   },

   methods:{ //this method is new - with addition of quantity
       addBoxAndQuantity(box, quantitySelected) {
          // if (quantity >0) {}
           console.log('quantity', quantitySelected) //not getting anything here
           let boxAndQuantity = {box: this.box, quantity: this.box.quantitySelected}
           console.log('in Box.vue boxAndQ', boxAndQuantity)
           //sending to App.vue or to OrderForm?
           this.$emit('box-added', boxAndQuantity)
       }

   }
}
</script>

<style scoped>

</style>