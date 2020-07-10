import axios from 'axios';

//const API_URL = 'https://buyingfromhome.herokuapp.com/purchase/'
const API_URL = 'http://localhost:8080/purchase/'

class PurchaseService{
    newPurchase(purchase){
        return axios.post(API_URL+"new",
            purchase
        )
    }
    
}

export default new PurchaseService()