import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import ContainerLogin from '../components/Login/Login'
import {withRouter} from 'react-router';
import NavBarResponsive from '../components/Navbar/NavBarResponsive'

const Login = () => {
    return (   
        <div>
            <NavBarResponsive></NavBarResponsive>
            <ContainerLogin></ContainerLogin>
        </div>      
    )         
}

export default withRouter(Login);