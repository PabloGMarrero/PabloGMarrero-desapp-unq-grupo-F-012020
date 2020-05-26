import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import ContainerRegister from '../components/Register/Register'
import {withRouter} from 'react-router';



class Register extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
           
            <div>
                 <Navbar></Navbar>
                 <ContainerRegister></ContainerRegister>
            </div>
            
        )
            
    }
}

export default withRouter(Register);