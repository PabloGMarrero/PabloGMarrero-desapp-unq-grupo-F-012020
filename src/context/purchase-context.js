import React, {useState, createContext} from 'react';

export const PurchaseContext = createContext();

export const PurchaseProvider = props =>{
  const [productsCount, setProductsCount] = useState(
    JSON.parse(localStorage.getItem('prod_count')) || 0
  );
  const [shoppingList, setShoppingList] = useState(
    JSON.parse(localStorage.getItem('shopping_list')) || []
  );
  const [cartIsOpen, setCartIsOpen] = useState(false);

  return(
    <PurchaseContext.Provider 
    
    value={{
      shoppingList,
      productsCount,
      setProductsCount,
      setShoppingList,
      cartIsOpen,
      setCartIsOpen
    }}
  >    
      
      {props.children}
    </PurchaseContext.Provider>
  )
}