import axios from 'axios';
//const API_URL = 'https://buyingfromhome.herokuapp.com/authusers/'
const API_URL = 'http://localhost:8080/stores/'

class StoreService{
    addStore(name, activity, street,number , locality,latitude,longitude,covDistance){
        return axios.post(API_URL+"addstore", {
            name, activity, street, number , locality, latitude, longitude, covDistance
        })
    }
    
}

export default new StoreService()

