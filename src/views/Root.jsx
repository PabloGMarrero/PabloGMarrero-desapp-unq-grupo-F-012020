import React from 'react';
import Location from '../components/Location/Location'
import Footer from '../components/Footer/Footer'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
    root:{
        margin: theme.spacing(2, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}));


const Root = () => {
    const classes = styles()
    return (    
        <Box className={classes.root}>
            <Location ></Location>
            <Footer></Footer>
        </Box>
    )
}

export default Root;
