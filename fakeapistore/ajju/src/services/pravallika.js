import axios from "axios";

const baseUrl="https://fakestoreapi.com/products";
class Pravallika{
    getAllStore(){
        return axios.get(baseUrl);
    }

}
export default new Pravallika();
