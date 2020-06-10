import React, {useState, createContext} from 'react';

export const CoordenadasContext = createContext();

export const CoordenadasProvider = props =>{
  const [coord, setCoordenadas] = useState({lat:-58.258655, lng:-34.721533});

  return(
    <CoordenadasContext.Provider value={[coord, setCoordenadas]}>
      {props.children}
    </CoordenadasContext.Provider>
  )
}