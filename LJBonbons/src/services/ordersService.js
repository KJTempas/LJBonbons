import axios from 'axios'
//axios will make requests from the Vue client to the Express API server
//const base_url = '/api/customer'

let orders_url ='/api/orders'
//let orderItems_url = '/api/orderItems'
export default {


    addOrder(order) {
        return axios.post(orders_url, order).then(response => {
            return response.data
        })
    },
    
}