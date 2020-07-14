import React from 'react';
import ContainerProfile from '../components/Profile/Profile'
import {withRouter} from 'react-router';
import NavBarResponsive from '../components/Navbar/NavBarResponsive'

const Profile = () => {
    return (    
        <div>
            <NavBarResponsive></NavBarResponsive>
            <ContainerProfile></ContainerProfile>
        </div>         
    )        
}

export default withRouter(Profile);