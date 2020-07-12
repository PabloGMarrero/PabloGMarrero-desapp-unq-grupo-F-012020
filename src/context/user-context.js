import React, {useState, createContext} from 'react';

export const UserContext = createContext();

export const UserProvider = props =>{
  const [user, setUser] = useState( JSON.parse(localStorage.getItem('user')) || {
    id: 0, 
    name: "",
    password: "",
    email: "",
    isAdmin: false,
    idStore: 0
  });

  const [dataFacebook,setDataFacebook] = useState(JSON.parse(localStorage.getItem('dataFacebook')) || '' );

  return(
    <UserContext.Provider value={{user, setUser ,dataFacebook, setDataFacebook}}>

      {props.children}
    </UserContext.Provider>
  )
}