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
       <input id="quantityOptions">
       <select name="quantity">
           <option value="0">0</option>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
        </select>
        
       v-model="boxOrdered" v-model="quantity" v-on:change="$emit('addBox', box, quantity)">
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
           quantity:''
       }
   },
   methods:{

   }
}
</script>

<style scoped>

</style>