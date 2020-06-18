import React, {useState, createContext} from 'react';

export const ProductContext = createContext();

export const StoreProvider = props =>{
  const [Product, setProduct] = useState({
    id: 0, 
    name: "",
    brand: "",
    imagenUrl: "",
    price:"",
    store: "",
  });

  return(
    <ProductContext.Provider value={[Product, setProduct]}>
      {props.children}
    </ProductContext.Provider>
  )
}