import axios from 'axios'
//axios will make requests from the Vue client to the Express API server
const base_url = '/api/customer'
let box_url = '/api/box'
let order_url ='/api/order'
let orderItem_url = '/api/orderItem'
export default {

    addCustomer(customer) {
        return axios.post(base_url, customer).then(response => {
            return response.data
        })
    },

    addBox(box) {
        return axios.post(box_url, box).then(response => {
            return response.data
        })
    },

    addOrder(order) {
        return axios.post(order_url, order).then(response => {
            return response.data
        })
    },

    addorderItem(orderItem) {
        return axios.post(orderItem_url, order).then(response => {
             return response.data
        })
    
    }
}
/*
    getAllCustomers() {
        return axios.get(base_url).then(response => {
            return response.data
        })
    },

    
    updateCustomer(customer) {
        //url will be base URL /id
        return axios.patch(`${base_url}/${customer.id}`, customer).then(response => {
            return response.data
        })
    },
    deleteCustomer(id) {
        return axios.delete(`${base_url}/${id}`).then(response => {
            return response.data
        })
    } */

