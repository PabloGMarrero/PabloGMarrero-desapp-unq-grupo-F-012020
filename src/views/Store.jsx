import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import ContainerStores from '../components/AddStores/AddStores'
import {withRouter} from 'react-router';



const Comercio = () => {
    return (   
        <div>
            <Navbar></Navbar>
            <ContainerStores></ContainerStores>
        </div>      
    )         
}

export default withRouter(Product);