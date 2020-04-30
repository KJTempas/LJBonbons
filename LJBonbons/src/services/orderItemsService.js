import axios from 'axios'
//axios will make requests from the Vue client to the Express API server
//const base_url = '/api/customer'
//let box_url = '/api/boxes'
//let order_url ='/api/orders'
let orderItems_url = '/api/orderItems'
export default {



    addorderItem(orderItem) {
        return axios.post(orderItems_url, order).then(response => {
             return response.data
        })
    
    }
}