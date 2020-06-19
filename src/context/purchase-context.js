import React, {useState, createContext} from 'react';

export const PurchaseContext = createContext();

export const PurchaseProvider = props =>{
  const [purchase, setPurchase] = useState({
    id: 0, 
    name: "",
    lastname: "",
    street: "",

  });

  return(
    <PurchaseContext.Provider value={[purchase, setPurchase]}>
      {props.children}
    </PurchaseContext.Provider>
  )
}