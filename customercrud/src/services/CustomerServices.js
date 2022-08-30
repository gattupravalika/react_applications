import axios from "axios";
const baseUrl= "http://localhost:3000/customer";
class CustomerService{

    getAllCustomers(){
        return axios.get(baseUrl);
    }
    getCustomer(id){
        return axios.get(`${baseUrl}/${id}`);
      }
      createCustomer(customer) {
        console.log("XXXXXX==>"+JSON.stringify(customer))
        return axios.post(baseUrl, customer);
      }
    updateCustomer(id, customer){
        return axios.put(`${baseUrl}/${id}`,customer)
    }
    deleteCustomer(id){
        return axios.delete(`${baseUrl}/${id}`)
    }
    
}
export default new CustomerService();
 