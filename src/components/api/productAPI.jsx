import axios from 'axios';

//const API_URL = 'https://buyingfromhome.herokuapp.com/products/'
//const API_URL = 'http://localhost:8080/products/'
const API_URL_PRODUCT = 'https://buyingfromhome.herokuapp.com/stores/store?'

const API_URL_STORES = 'https://buyingfromhome.herokuapp.com/stores/stores?'



export const getProducts = (lat, long) => {

  return axios.get(`${API_URL_PRODUCT}`,{ params: {latitude: lat,longitude: long}} )
    .then(response => response.data)
    .catch(error => Promise.reject(error.response.data))
    .catch(() => this.setState({error: 'No hay Productos en tu zona'}));
}


export const getStores = (lat, long) => {

  return axios.get(`${API_URL_STORES}`,{ params: {latitude: lat,longitude: long}} )
    .then(response => response.data)
    .catch(error => Promise.reject(error.response.data))
    .catch(() => this.setState({error: 'No hay Comercios en tu zona'}));
}