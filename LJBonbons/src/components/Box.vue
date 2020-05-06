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
       <select name="quantity" v-model="quantity">
           <option value="0">0</option>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <!--<option v-for="quantity in quantities" v-bind:key =??? v-bind:value="quantity">{{quantity}}</option>-->
        v-model="boxOrdered"  v-on:change="$emit('addBox', box, quantity)">
        </select>
        
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
           quantity:'',
          // quantities: [0,1,2,3],
       }
   },
   //props: {
    //   quantities: [0,1,2,3]
   //},
   methods:{

   }
}
</script>

<style scoped>

</style>