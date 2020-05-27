import axios from 'axios';

const API_URL = 'https://buyingfromhome.herokuapp.com/products/'
//const API_URL = 'http://localhost:8080/products/'

export const getProducts = () => {
  return axios.get(`${API_URL}`)
    .then(response => response.data)
    .catch(error => Promise.reject(error.response.data))
  //  .catch(error => console.log("**** ERROR ****", error.toJSON()))
}