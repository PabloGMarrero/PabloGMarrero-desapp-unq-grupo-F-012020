import axios from 'axios';

const API_URL = 'https://buyingfromhome.herokuapp.com/users/'



class UserService{
    getUserById(id){
        return axios.get(API_URL+"get", {
            id
        })
    }

    getUserOrders(id) {
        const url = API_URL+"get/"+id+"/orders"
        console.log(url)
        return axios.get(API_URL+"get/"+id+"/orders", {
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

