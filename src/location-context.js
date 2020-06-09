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


/*import React from 'react';

const CoordenadasContext = React.createContext();

class CoordenadasProvider extends React.Component{
  state= {
    coord:{lat:0, lng:0}
  }

  setCoordenadas = (aLat, aLng) =>{
    this.setState({lat:aLat, lng:aLng})
  }

  render(){
    const {children} = this.props
    const {coord} = this.state
    const {setCoordenadas} = this
    return(
      <CoordenadasContext.Provider
        value={
          {
            coord, 
            setCoordenadas,
          }
        }
        >
          {children}
        </CoordenadasContext.Provider>
    )
  }
}


export const CoordConsumer = CoordenadasContext.Consumer
export {CoordenadasProvider}
export default CoordenadasContext
*/

/*export const CoordenadasStateContext = React.createContext()
export const CoordenadasDispatchContext = React.createContext()

function coordenadasReducer(state, action){
  switch(action.type){
    case 'latitude':{
      return {...state, latitude: state.latitude}
    }
    case 'longitude':{
      return {...state, longitude: state.longitude}
    }
    default:{ }
  }
}

function CoordenadasProvider({children}){
  const [state, dispatch] = React.useReducer(coordenadasReducer, {coord: {latitude:0, longitude: 0} })
  return(
    <CoordenadasProvider.Provider value = {state}>
      <CoordenadasDispatchContext.Provider value = {dispatch}>
        {children}
      </CoordenadasDispatchContext.Provider>
    </CoordenadasProvider.Provider>
  )
}

function useCoordenadasState(){
  const context = React.useContext(CoordenadasStateContext)
  if (context === undefined){
    console.log("useCoordenadasContext must be used within a countprovider")
  }
  return context
}

function useCoordenadasDispatch(){
  const context = React.useContext(CoordenadasDispatchContext)
  if (context === undefined){
    console.log("useCoordenadasDispatch must be used within a countprovider")
  }
  return context
}

export {CoordenadasProvider, useCoordenadasState, useCoordenadasDispatch}
*/
/*
  export const CoordenadasContextProvider = (props) =>{
    const setLatitude= (lat) =>{
      setState({...state, latitude:lat})
    }

    const setLongitude= (lng) =>{
      setState({...state, longitude:lng})
    }

    const initState = {
      latitude: 0,
      longitude: 0,
      setLat: setLatitude,
      setLong: setLongitude
    }

    const [state, setState] = useState(initState)

    return(
      <CoordenadasContext.Provider value= {state}>
        {props.children}
      </CoordenadasContext.Provider>
    )
  }

  */