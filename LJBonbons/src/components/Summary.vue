<template>
    <div class="summary">
        <h3> Your Order Summary </h3>
        <p> Customer information: <br>
            Customer id: {{customer.id}}<br>
            First and Last Name: {{customer.firstName}} {{customer.lastName}}
        </p>
        <p>Number of boxes you ordered:  <br>
         
        </p>
        <p> Thanks for ordering from Long John's Bonbons.  Your order should arrive in 5-7 business days. Enjoy!</p>
    </div>
</template>

<script>
export default {
    name: 'Summary',
    props: { 
        customer: {},  //customer is an Object
        //boxes: {}
    }

}
</script>

<style scoped>
.summary {
    background-color: rgb(245, 119, 197);
}
</style>