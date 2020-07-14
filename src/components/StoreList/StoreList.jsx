import React from 'react';
import Store from '../Store/Store';
import { useTranslation } from 'react-i18next';
import MapboxGLMapStores from './MapGLStores';
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    root:{
      width: "80%",
      margin: "30px",
      display: "flex",
      flexDirection: "column",
      
    },
    products:{
        width: "80%",
        marginLeft: "25%",
        display: "flex",
        flexDirection: "row"
    }
  }));

const StoreList = ({stores}) =>{
    const classes = styles()
    const {t} = useTranslation()    
    return (
        <Box className = {classes.root}>
            <MapboxGLMapStores stores = {stores}></MapboxGLMapStores>
            <Box className = {classes.products}>
                {stores.length > 0  ? 
                stores.map( store =>
                    <Store
                        key={store.id}
                        storeName={store.storeName}              
                        id={store.id}
                        activity={store.activity}
                        t = {t}
                    />
                )
                : <p>Loading... </p>
                }
            </Box>
        </Box>
    )
}

export default StoreList;




