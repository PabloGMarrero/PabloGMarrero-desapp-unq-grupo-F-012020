import React, {useState, createContext} from 'react';

export const UserContext = createContext();

export const UserProvider = props =>{
  const [user, setUser] = useState({
    id: 0, 
    name: "",
    password: "",
    email: "",
    isAdmin: false,
    idStore: 0
  });

  return(
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  )
}