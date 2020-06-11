import React from 'react';
import Store from '../Store/Store';

const StoreList = ({stores}) =>{
    console.log(stores)
    
    return (
        
        stores.length > 0  ? 
        stores.map( store =>
            <Store
                storeName={store.storeName}
                
                id={store.id}
                activity={store.activity}

            />
          )
          : <p>Loading... </p>
    )
}

export default StoreList;

