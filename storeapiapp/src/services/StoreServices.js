import axios from "axios";


const baseUrl="https://api.storerestapi.com/products";

class StoreServices{
    getAllStore(){
        return axios.get(baseUrl);
    }
    createStore(obj){
        return axios.post("http://localhost:3000/formusers",obj);
    }
    getAlldata(){
        return axios.get("http://localhost:3000/formusers")
    }
    
}
export default new StoreServices();