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
       <select  v-model="quantitySelected">
           <option v-for="quantity in quantities" 
            v-bind:value="quantity"
           v-bind:key ="quantity">{{quantity}}
           </option>
        v-model="boxOrdered"  v-on:change="$emit('addBox', this.box, quantitySelected)">
        </select>  <!-- need to send quantity also!! -->
        
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

   methods:{

   }
}
</script>

<style scoped>

</style>