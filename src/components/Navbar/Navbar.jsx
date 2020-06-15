import React, { useState, useContext } from 'react'
import { withRouter } from 'react-router';
import {useHistory } from 'react-router-dom';
import './Navbar.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { UserContext} from '../../context/user-context'
import { useTranslation } from 'react-i18next'

const styles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 5,
    },
    image: {
      maxHeight: '40px'
    },
    strikingButton:{
      background:  "#EDF2F4",
      margin: theme.spacing(0, 2, 0, 0)
    },
    button:{
      margin: theme.spacing(0, 15, 0, 0),
      display: 'flex',
      justifyContent: "flex-end",
      width: "100vw"
    },
    languageButton:{
      marginRight: theme.spacing(2),
      background: "#EDF2F4",
    },
    navbar:{
      background:"#D80032"
    }

  }));
  

const NavBar = () => {
  const [user] = useContext(UserContext)
  const classes = styles();
  const history = useHistory()
  const [isLoggued] = useState(user!==null && user !== undefined && user.name!== "")
  const { t, i18n } = useTranslation();

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

  const goToAddProduct = () =>{
    history.push("/product")
}

  const changeLanguage = (language) =>{
    i18n.changeLanguage(language)
  }

  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">   
            <Typography variant="h6" className={classes.title} onClick={goToHome}>{t("Navbar.Home")}</Typography>
        </IconButton>   
        <Box className={classes.button}>
          <Box>
            {isLoggued ?
              <Box>
                <Button variant="outlined" className={classes.strikingButton} onClick={goToProfile}>{t("Navbar.Profile")}</Button>
                <Button variant="outlined" className={classes.strikingButton} onClick={logOut}>{t("Navbar.Logout")}</Button>
              </Box>
              :
              <Box>
                <Button variant="outlined" className={classes.strikingButton} onClick={goToLogin}>{t("Navbar.Login")}</Button>
                <Button variant="outlined" className={classes.strikingButton} onClick={goToRegister}>{t("Navbar.Register")}</Button>              
              </Box>
            }
          </Box>     
          <Button className={classes.languageButton} onClick={() => changeLanguage('en')}>
              {t("Language.English")}
          </Button>
          <Button className={classes.languageButton} onClick={() => changeLanguage('es')}>
              {t("Language.Spanish")}
          </Button> 
          <Button className={classes.strikingButton} onClick={goToAddProduct}>
              Agregar Productos
          </Button> 
        
        
        </Box>     
      </Toolbar>
    </AppBar>
  );
  
}
export default withRouter(NavBar);