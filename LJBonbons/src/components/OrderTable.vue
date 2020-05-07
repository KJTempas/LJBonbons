<template>
    <div class="orderTable">
        
        <div class="card order-list m-2 p-2">
            <h4 class="card-title">Order Table</h4>

            <div class="edit-table-toggle form-check">
                <input id="edit-table" type="checkbox" class="form-check-input" v-model="editTable">
                <label for="edit-table" class="form-check-label">Edit order? </label>
            </div>

            <div id="order-table">
                
                <table class="table">
                    <tr><!-- the column headers-->
                        <!--<th>Box #</th>-->
                        <th>Box Size</th>
                        <th>Coating Selected</th>
                        <th>Quantity</th>
                        <th v-show="editTable">Delete</th>
                        
                    </tr>
                   
                    <OrderRow
                    v-for="box in boxes"
                    v-bind:key="box.id"
                    v-bind:box="box"
                    
                    v-bind:edit="editTable"
                    v-on:delete-box="boxDeleted">
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
            editTable: false,
            
        }
    },
    props: {
        boxes: Array
    },
    methods: {
        boxDeleted(box) {
            this.$emit('delete-box', box)
        },
          

    }
}
</script>

<style>

#order-table {
    background-color: #a9f5d4;
}
/* write any styles for this component here */
</style>