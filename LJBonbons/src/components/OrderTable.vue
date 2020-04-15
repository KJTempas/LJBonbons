<template>
    <div class="orderTable">
        <!-- write template here -->
        <div class="card order-list m-2 p-2">
            <h4 class="card-title">Order Summary</h4>

            <div class="edit-table-toggle form-check">
                <input id="edit-table" type="checkbox" class="form-check-input" v-model="editTable">
                <label for="edit-table" class="form-check-label">Edit order? </label>
            </div>

            <div id="order-table">
                <table class="table">
                    <tr>
                        <th>Box #</th>
                        <th>Box Size</th>
                        <th>Coating Selected</th>
                        <th>$</th>
                        <th v-show="editTable">Delete</th>
                    </tr>
                    
                    <OrderRow
                        v-for="student in students"
                        v-bind:key="student.name" 
                        v-bind:student="student"
                        v-bind:edit="editTable"
                        v-on:student-present="studentArrivedOrLeft"
                        v-on:delete-student="studentDeleted">
                    </OrderRow>

                </table>
            </div>
        </div>
    </div>
</template>

<script>
//create and export component here
import OrderRow from '@/components/OrderRow.vue'

export default { 
    name: 'OrderTable',
    components: { OrderRow },
    data() {
        return {
            editTable: false
        }
    },
    props: {
        students: Array
    },
    methods: {
        //a checked event will emit message to parent
        studentArrivedOrLeft(student) {  //will pass student object with event
            //todo emit message to parent
            this.$emit('student-present', student)
        },
        studentDeleted(student) {
            this.$emit('delete-student', student)
        }
    }
}
</script>

<style>

#order-table {
    background-color: #a9f5d4;
}
/* write any styles for this component here */
</style>