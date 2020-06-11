import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import ContainerHome from '../components/Home/Home'
import {withRouter} from 'react-router';
import Footer from '../components/Footer/Footer'

const Home = () => {
    return (    
        <div>
            <Navbar></Navbar>
            <ContainerHome></ContainerHome>
            <Footer></Footer>
        </div>         
    )        
}

export default withRouter(Home);