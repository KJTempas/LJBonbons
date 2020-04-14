<!-- use if rows ae complex; one row for one student's data-->
<template> <!--note that template element contains a <tr>, not a <div>  -->
   <!--template elements must contain exactly one child element(like the <tr>)  -->
       <!--but that element can contain many children   -->
   <!--<tr v-bind:class="'present-' + student.present">-->
    <tr class="order-row" v-bind:class="'present-' + student.present">

        <td>{{box.id}}
        <td>{{ box.size }}</td>
        <td>{{ box.coating }}</td>
       
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
        /*checked(customer) {
            this.$emit('student-present', student)
        },*/
        deleteBox(box) {
            if (confirm(`Delete ${customer.box}?`)) {
                this.$emit('delete-box', customer)
            }
        }
    }
}
</script>

<style>
.present-true {
    color: lavender;
    font-style: bold;
}
.present-false {
    color: blue;
    font-style: italic;
}
</style>