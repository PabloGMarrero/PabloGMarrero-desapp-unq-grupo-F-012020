import axios from 'axios';
//const API_URL = 'https://buyingfromhome.herokuapp.com/authusers/'
const API_URL = 'http://localhost:8080/stores/'

class addProductService{
    addProductToStore(name, brand,  imagenUrl , price, store){
        return axios.post(API_URL+"addproduct", {
            name, brand,  imagenUrl , price, store
        })
    }
    
}

export default new addProductService()