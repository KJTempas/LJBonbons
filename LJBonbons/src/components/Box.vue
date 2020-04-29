<template>
   <div>
       <span class="boxType">{{boxes.boxDescription}}</span>
       <p>
       <input id="orderBox" type = "checkbox"
       v-model="orderBox" v-on:change="$emit('isOrdered', boxDescription)>
        </p>   

        
</template>

<script>
export default {
   name: 'boxDescription',
   props: {
       box: Object
   },
   data() {
       return {
           boxDescription: this.boxes.boxDescription
           boxOrdered: this.boxes.ordered
       }
   }
}
</script>

<style scoped>

</style>