import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import PurchaseHistory from '../components/Profile/PurchaseHistory'
import {withRouter} from 'react-router';

const HistorialView = () => {
    return (   
        <div>
            <Navbar></Navbar>
            <PurchaseHistory></PurchaseHistory>
        </div>      
    )         
}

export default withRouter(HistorialView);