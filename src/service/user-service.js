import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://buyingfromhome.herokuapp.com/users/'

class UserService{
    getUserById(id){
        return axios.get(API_URL+"get", {
            id
        })
    }

    getUserOrders(id){
        return axios.get(API_URL+"get/"+{id}+"/orders", {
            id
        })
    }
}

export default new UserService();