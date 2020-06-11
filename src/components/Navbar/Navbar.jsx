import React, { useState, useContext } from 'react'
import { withRouter } from 'react-router';
import {useHistory } from 'react-router-dom';
import './Navbar.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography'
import { UserContext} from '../../context/user-context'

const styles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    image: {
      maxHeight: '40px'
    }
  }));
  

const NavBar = () => {
    const [user] = useContext(UserContext)
    const classes = styles();
    const history = useHistory()
    const [isLoggued] = useState(user!==null && user !== undefined && user.name!== "")
    const open = Boolean(true);

  const goToLogin = () =>{
    history.push("/login")
  }

  const goToProfile = () =>{
    history.push("/profile")
  }

  const goToRegister = () =>{
    history.push("/register")
  }

  const logOut =() =>{
    //tendría que desloguearse llamando a auth-service.js
    history.push("/")
  }
  const goToHome = () =>{
      history.push("/home")
  }

  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">   
            <Typography variant="h6" className={classes.title} onClick={goToHome}>Home</Typography>
        </IconButton>   
            <div>{isLoggued ?
                <div>
                    <Button onClick={goToProfile}>Mi Perfil</Button>
                    <Button onClick={logOut}>Logout</Button>
                </div>
                :
                <div>
                    <Button onClick={goToLogin}>Login</Button>
                    <Button onClick={goToRegister}>Register</Button>              
                </div>
            }
          </div>           
      </Toolbar>
    </AppBar>
  );
  
}
export default withRouter(NavBar);