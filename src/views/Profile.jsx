import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import ContainerProfile from '../components/Profile/Profile'
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