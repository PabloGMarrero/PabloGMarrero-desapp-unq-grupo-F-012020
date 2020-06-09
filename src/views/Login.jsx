import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import ContainerLogin from '../components/Login/Login'
import {withRouter} from 'react-router';



class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (   
            <div>
                 <Navbar></Navbar>
                 <ContainerLogin></ContainerLogin>
            </div>      
        )         
    }
}

export default withRouter(Login);