import React from 'react';
import Purchase from '../StoreList/Purchase';
import { useTranslation } from 'react-i18next';


const PurchaseList = ({purchase}) =>{
    const {t} = useTranslation()    
    return (

        purchase.length > 0  ? 
        purchase.map( purchase =>
            <Purchase
                purchaseDate={purchase.purchaseDate}              
                paymentMethod={purchase.paymentMethod}
                total={purchase.total}
                itemQuantity={purchase.itemList.lengh}
            />
          )
          : <p>Loading... </p>
    )
    
}

export default PurchaseList;
