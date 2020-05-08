<template>
    <div class="summary">
        <h3> Your Order Summary </h3>
        <p> 
         Thank you, {{customer.firstName}} {{customer.lastName}} for ordering from Long John's Bonbons.  
                Your order should arrive in 5-7 business days. Enjoy!
            Order size: {{boxesAndQuantities.box.quantity}}
        </p>
        
        
    </div>
</template>

<script>
export default {
    name: 'Summary',
    props: { 
        customer: {}, 
        boxesAndQuantities: [] 
        
    }

}
</script>

<style scoped>
.summary {
    background-color: rgb(245, 119, 197);
}
</style>