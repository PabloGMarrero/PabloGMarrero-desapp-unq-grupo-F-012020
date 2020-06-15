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

    updateUser(name, email, password){
        return axios.post(API_URL+"update", {
            name, email, password
        });
    }
}

export default new UserService();