import axios from 'axios';

const API_URL = 'https://buyingfromhome.herokuapp.com/stores/'
//const API_URL = 'http://localhost:8080/stores/'

class StoreService{
    addStore(name, activity, street,number , locality,latitude,longitude,covDistance, email, password){
        // return axios.post(API_URL+"addstore", {
        //     name, activity, street, number , locality, latitude, longitude, covDistance
        // })
        const user = {
            id:0, email, password, name:""
        }
        const store = {
            name, activity, street, number , locality, latitude, longitude, covDistance
        }

        const userStoreDto = {
            userDto: user,
            storeDto: store
        }
        return axios.post(API_URL+"addstore", userStoreDto )
    }
}

export default new StoreService()

