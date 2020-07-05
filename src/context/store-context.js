import React, {useState, createContext} from 'react';

export const StoreContext = createContext();

export const StoreProvider = props =>{
  const [store, setStore] = useState({
    id: 0, 
    name: "",
    activity: "",
    street: "",
    number:"",
    locality: "",
    latitude:"",
    longitude:"",
    covDistance: "",
  });

  return(
    <StoreContext.Provider value={[store, setStore]}>
      {props.children}
    </StoreContext.Provider>
  )
}