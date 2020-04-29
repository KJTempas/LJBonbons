<template>
   <div>
       <span class="boxType">{{box.boxDescription}}</span>
       <p>
       <input id="orderBox" type = "checkbox"
       v-model="orderBox" v-on:change="$emit('isOrdered', boxDescription)">
        </p>   
    </div>
        
</template>

<script>
export default {
   name: 'boxDescription',
   props: {
       box: Object
   },
   data() {
       return {
           boxDescription: this.boxes.boxDescription,
           //boxOrdered: this.boxes.ordered
       }
   }
}
</script>

<style scoped>

</style>