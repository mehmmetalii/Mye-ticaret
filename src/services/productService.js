import axios from "axios"


export default  class ProductService{

getProducts=()=>{
         return  axios.get(`https://localhost:44316/api/Products`)
     }
    getProductName=(productName)=>{
        return  axios.get(`https://localhost:44316/api/Products/(id)?productName=`+productName)
    }
}
