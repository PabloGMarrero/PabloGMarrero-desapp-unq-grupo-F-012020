import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import ContainerRegister from '../components/Register/Register'
import {withRouter} from 'react-router';

const Register = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ContainerRegister></ContainerRegister>
        </div>
    )
}

export default withRouter(Register);