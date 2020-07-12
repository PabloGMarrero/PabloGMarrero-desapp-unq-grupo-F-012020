import axios from 'axios';

const API_URL = 'https://buyingfromhome.herokuapp.com/users/'
// const API_URL = 'http://localhost:8080/users/'

class UserService{
    getUserById(id){
        return axios.get(API_URL+"get", {
            id
        })
    }

    getUserOrders(id) {
        const url = API_URL+"get/"+id+"/orders"
        return axios.get(url, {
            id
        })
    }

    updateUser(id, name, email, password){
        const user = {
            name, email, password, id, isAdmin:false, idStore:0
        }
        console.log(API_URL+"updateuser", user)
        return axios.put(API_URL+"updateuser", user);
    }

}

export default new UserService();

