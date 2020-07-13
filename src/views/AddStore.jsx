import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import ContainerStores from '../components/AddStores/AddStores'
import {withRouter} from 'react-router';
import NavBarResponsive from '../components/Navbar/NavBarResponsive'

const RegisteStoreView = () => {
    return (   
        <div>
            <NavBarResponsive></NavBarResponsive>
            <ContainerStores></ContainerStores>
        </div>      
    )         
}

export default withRouter(RegisteStoreView);