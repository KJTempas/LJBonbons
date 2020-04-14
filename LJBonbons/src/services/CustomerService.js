import axios from 'axios'
//axios will make requests from the Vue client to the Express API server
const base_url = '/api/customers'
export default {

    getAllCustomers() {
        return axios.get(base_url).then(response => {
            return response.data
        })
    },

    addCustomer(customer) {
        return axios.post(base_url, customer).then(response => {
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
    }
}
