<template>
   <div>
       <span class="boxType">{{box.boxDescription}}</span>
       <p>
       <input id="orderBox" type = "checkbox"
       v-model="boxOrdered" v-on:change="$emit('addBox', box)">
        </p>   
    </div>
        
</template>

<script>
export default {
   //name: 'boxDescription',
    name: 'Box',
   props: {
       box: Object
   },
   data() {
       return {
           //boxDescription: this.boxes.boxDescription,
           boxOrdered: ''
       }
   },
   methods:{

   }
}
</script>

<style scoped>

</style>