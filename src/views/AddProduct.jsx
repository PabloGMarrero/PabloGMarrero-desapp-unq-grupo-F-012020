import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import ContainerProducts from '../components/AddProducts/AddProduct'
import {withRouter} from 'react-router';



const AddProduct = () => {
    return (   
        <div>
            <Navbar></Navbar>
            <ContainerProducts></ContainerProducts>
        </div>      
    )         
}

export default withRouter(AddProduct);