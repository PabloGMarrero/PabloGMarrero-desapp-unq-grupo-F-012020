import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from "../components/Navbar/Navbar";
import ContainerHome from '../components/Home/Home'
import {withRouter} from 'react-router';
import Footer from '../components/Footer/Footer'
import Bag from '../components/Bag/Bag'
import NavBarResponsive from '../components/Navbar/NavBarResponsive'

const styles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}));

const Home = () => {
    const classes = styles()
    return (    
        <Box className={classes.root}>
            <NavBarResponsive></NavBarResponsive>
            <Bag></Bag>
            <ContainerHome></ContainerHome>
            <Footer></Footer>
        </Box>         
    )        
}

export default withRouter(Home);