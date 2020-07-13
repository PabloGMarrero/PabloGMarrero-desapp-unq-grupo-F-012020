import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import ContainerProducts from '../components/AddProducts/AddProduct'
import {withRouter} from 'react-router';
import NavBarResponsive from '../components/Navbar/NavBarResponsive'


const AddProduct = () => {
    return (   
        <div>
            <NavBarResponsive></NavBarResponsive>
            <ContainerProducts></ContainerProducts>
        </div>      
    )         
}

export default withRouter(AddProduct);