import axios from 'axios'

//axios will make requests from the Vue client to the Express API server
const base_url = '/api/customer'
let box_url = '/api/boxes'
let order_url ='/api/orders'
let orderItem_url = '/api/orderItems'
export default {

    addCustomer(customer) {
        return axios.post(base_url, customer).then(response => {
            return response.data
        })
    },

    /*getCustomer(customer) {
        return axios.get('/api/customer/').then (response => {
            return response.data
        })
    },*/
    getBoxes() {
        return axios.get('/api/boxes/').then (response => {
            return response.data
        })
    },
    addBox(box) {
        return axios.post(box_url, box).then(response => {
            return response.data
        })
    },
    
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

