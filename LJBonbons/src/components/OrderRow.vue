
<template> <!--note that template element contains a <tr>, not a <div>  -->
   <!--template elements must contain exactly one child element(like the <tr>)  -->
       <!--but that element can contain many children   -->
  
    <tr >
        
        <td> {{boxAndQuantity.box.boxSize}}</td>
        <td> {{boxAndQuantity.box.coating}}

        <td> {{ boxAndQuantity.quantity }}</td>
       
        <td v-show="edit">
            <img class="delete-icon" v-on:click="deleteBox" src="@/assets/delete.png">
            </td>
    </tr>
</template>

<script>
export default {
    name: 'OrderRow',
    props: {
        boxAndQuantity: Object,
        edit: Boolean,
    },
    methods: {
        
        deleteBox() {
            if (confirm(`Delete this box/these boxes?`)) {
                
                this.$emit('delete-box', this.boxAndQuantity)  //send to parent(OrderTable)
                
            }
        }
    }
}
</script>

<style>

</style>