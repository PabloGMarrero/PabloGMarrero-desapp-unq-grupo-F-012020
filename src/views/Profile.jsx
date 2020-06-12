import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import ContainerProfile from '../components/Login/Profile'
import {withRouter} from 'react-router';


const Profile = () => {
    return (    
        <div>
            <Navbar></Navbar>
            <ContainerProfile></ContainerProfile>
        </div>         
    )        
}

export default withRouter(Profile);