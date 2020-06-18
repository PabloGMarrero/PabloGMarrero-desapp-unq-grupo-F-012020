import React from 'react';
import Store from '../Store/Store';
import { useTranslation } from 'react-i18next';

const StoreList = ({stores}) =>{
    const {t} = useTranslation()    
    return (
        
        stores.length > 0  ? 
        stores.map( store =>
            <Store
                storeName={store.storeName}              
                id={store.id}
                activity={store.activity}
                t = {t}
            />
          )
          : <p>Loading... </p>
    )
}

export default StoreList;




