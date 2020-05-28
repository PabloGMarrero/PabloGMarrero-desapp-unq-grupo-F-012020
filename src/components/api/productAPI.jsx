import axios from 'axios';

//const API_URL = 'https://buyingfromhome.herokuapp.com/products/'
//const API_URL = 'http://localhost:8080/products/'
const API_URL = 'https://buyingfromhome.herokuapp.com/stores/store?'



export const getProducts = (long, lat) => {

  return axios.get(`${API_URL}`,{ params: {latitude: lat,longitude: long}} )
    .then(response => response.data)
    .catch(error => Promise.reject(error.response.data))
  //  .catch(error => console.log("**** ERROR ****", error.toJSON()))
}