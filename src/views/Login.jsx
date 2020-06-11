import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import ContainerLogin from '../components/Login/Login'
import {withRouter} from 'react-router';



const Login = () => {
    return (   
        <div>
            <Navbar></Navbar>
            <ContainerLogin></ContainerLogin>
        </div>      
    )         
}

export default withRouter(Login);