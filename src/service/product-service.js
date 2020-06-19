import axios from 'axios';
const API_URL = 'https://buyingfromhome.herokuapp.com/stores/'
//const API_URL = 'http://localhost:8080/stores/'

class addProductService{
    addProductToStore(name, brand,  imagenUrl , price, store){
        return axios.post(API_URL+"addproduct", {
            name, brand,  imagenUrl , price, store
        })
    }
    
}

export default new addProductService()


const API_URL_PRODUCT = 'https://buyingfromhome.herokuapp.com/stores/store?'
const API_URL_STORES = 'https://buyingfromhome.herokuapp.com/stores/stores?'
//const API_URL_PRODUCT = 'http://localhost:8080/stores/store?'
//const API_URL_STORES = 'http://localhost:8080/stores/stores?'



export const getProducts = (lat, long) => {

    return axios.get(`${API_URL_PRODUCT}`,{ params: {latitude: lat,longitude: long}} )
      // .then(response => response.data)
      // .catch(error => Promise.reject(error.response.data))
      // .catch(() => this.setState({error: 'No hay Productos en tu zona'}));
}


export const getStores = (lat, long) => {

  return axios.get(`${API_URL_STORES}`,{ params: {latitude: lat,longitude: long}} )
    // .then(response => response.data)
    // .catch(error => Promise.reject(error.response.data))
    // .catch(() => this.setState({error: 'No hay Comercios en tu zona'}));
}
