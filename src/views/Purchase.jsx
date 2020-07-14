import React from 'react';
import ContainerCheckout from '../components/Shopping/Checkout'
import {withRouter} from 'react-router';
import NavBarResponsive from '../components/Navbar/NavBarResponsive'

const Checkout = () => {
    return (    
        <div>
            <NavBarResponsive></NavBarResponsive>
            <ContainerCheckout></ContainerCheckout>
        </div>         
    )        
}

export default withRouter(Checkout);