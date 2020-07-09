import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import ProfileDataUser from '../components/Profile/ProfileView'
import {withRouter} from 'react-router';

const DataProfileView = () => {
    return (   
        <div>
            <Navbar></Navbar>
            <ProfileDataUser></ProfileDataUser>
        </div>      
    )         
}

export default withRouter(DataProfileView);