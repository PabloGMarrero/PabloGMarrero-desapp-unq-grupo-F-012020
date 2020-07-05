import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import RegisterUser from '../components/Register/RegisterUser'
import {withRouter} from 'react-router';

const RegisterUserView = () => {
    return (   
        <div>
            <Navbar></Navbar>
            <RegisterUser></RegisterUser>
        </div>      
    )         
}

export default withRouter(RegisterUserView);