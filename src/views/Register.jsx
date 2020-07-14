import React from 'react';
import ContainerRegister from '../components/Register/Register'
import {withRouter} from 'react-router';
import NavBarResponsive from '../components/Navbar/NavBarResponsive'

const Register = () => {
    return (
        <div>
            <NavBarResponsive></NavBarResponsive>
            <ContainerRegister></ContainerRegister>
        </div>
    )
}

export default withRouter(Register);