
<template> <!--note that template element contains a <tr>, not a <div>  -->
   <!--template elements must contain exactly one child element(like the <tr>)  -->
       <!--but that element can contain many children   -->
  
    <tr >
        <!--<td>{{box.id}}-->
        <!--<td>{{ box.boxSize }}</td>
        <td>{{ box.coating }}</td>-->
        <td> {{ boxAndQuantity.box.boxSize}}</td>
        <td> {{boxAndQuantity.boxCoating}}

        <td> {{ boxAndQuantity.quantitySelected }}</td>
       
        <td v-show="edit">
            <img class="delete-icon" v-on:click="deleteBox(box)" src="@/assets/delete.png">
            </td>
    </tr>
</template>

<script>
export default {
    name: 'OrderRow',
    props: {
        box: Object,
        edit: Boolean
    },
    methods: {
        
        deleteBox(box) {
            if (confirm(`Delete this box?`)) {
                this.$emit('delete-box', box)  //send to parent(OrderTable)
            }
        }
    }
}
</script>

<style>

</style>