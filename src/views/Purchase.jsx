import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import ContainerCheckout from '../components/Shopping/Checkout'
import {withRouter} from 'react-router';


const Checkout = () => {
    return (    
        <div>
            <Navbar></Navbar>
            <ContainerCheckout></ContainerCheckout>
        </div>         
    )        
}

export default withRouter(Checkout);