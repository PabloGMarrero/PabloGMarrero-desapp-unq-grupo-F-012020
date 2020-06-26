import React, {useState, createContext} from 'react';

export const PurchaseContext = createContext();

export const PurchaseProvider = props =>{
  const [productsCount, setProductsCount] = useState( JSON.parse(localStorage.getItem('prod_count')) || 0  );
  
  const [shoppingList, setShoppingList] = useState( JSON.parse(localStorage.getItem('shopping_list')) || []  );

  const [cartIsOpen, setCartIsOpen] = useState(false);

  const [total, setTotal] = useState(false);

  const [deliveryType, setDeliveryType] = useState();

  const [payMethod, setPayMethod] = useState();

  const [street, setStreet] = useState();

  const [number, setNumber] = useState();

  const [city, setCity] = useState();

  const [zipCode, setZipCode] = useState();

  const [state, setState] = useState();

  const [country, setCountry] = useState();

  return(
    <PurchaseContext.Provider 
    
    value={{
      shoppingList,
      productsCount,      
      cartIsOpen,    
      total,
      deliveryType,      
      payMethod,     
      street,
      number,
      state,
      city,
      zipCode,
      country,
      setTotal,
      setCartIsOpen,
      setDeliveryType,
      setProductsCount,
      setShoppingList,
      setStreet,
      setNumber,
      setState,
      setCity,
      setZipCode,
      setCountry,
      setPayMethod

    }}
  >    
      
      {props.children}
    </PurchaseContext.Provider>
  )
}