import React, { useState, useContext } from 'react'
import { withRouter } from 'react-router';
import {useHistory } from 'react-router-dom';
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
      color: "#EDF2F4",
      background:  "#2B2D42",
      margin: theme.spacing(0, 2, 0, 0)
    },
    button:{
      margin: theme.spacing(0, 15, 0, 0),
      display: 'flex',
      justifyContent: "flex-end",
      width: "100vw"
    },
    navbar:{
      background:"#D80032"
    },
    language:{
      marginLeft: "20px",
    }
  }));
  
const NavBar = () => {
  const classes = styles();
  const history = useHistory()
  const { t, i18n } = useTranslation();
  const {user} = useContext(UserContext)
  const isUserAdmin = user.isAdmin
  const {dataFacebook} = useContext(UserContext) 
  const [isLoggued] = useState((user!==null && user !== undefined && user.email!== "") ||  (dataFacebook.email!== '' &&  dataFacebook!== ""))

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
    // localStorage.setItem("user", {id: 0,  name: "",  password: "", email: "" })
    // localStorage.setItem("prod_count", 0)
    // localStorage.setItem("shopping_list", [] )
    localStorage.removeItem("user");
    localStorage.removeItem("dataFacebook");
    localStorage.removeItem("shopping_list")
    localStorage.removeItem("prod_count")
    // authService.logout()
    setTimeout(history.push("/"), 10000)
    // history.push("/")
  }



  const changeLanguage = (language) =>{
    i18n.changeLanguage(language)
  }

  const goToHome = () =>{
      history.push("/home")
  }

  const NavBarAdmin = ()=>{
    return(
      <Box>
        
        <Button className={classes.strikingButton}  variant="outlined" onClick={logOut}>{t("Navbar.Logout")}</Button> 
        <Button className={classes.strikingButton} variant="outlined" onClick={goToProfile}>{t("Navbar.Profile")}</Button>                       
      </Box>
    )
  }

  const NavBarUser = () =>{
    return(
      <Box>
        <Button className={classes.strikingButton} variant="outlined" onClick={goToProfile}>{t("Navbar.Profile")}</Button>
        <Button className={classes.strikingButton}  variant="outlined" onClick={logOut}>{t("Navbar.Logout")}</Button>
      </Box>
    )
  }

  const NavBarNoUser =() =>{
    return(
      <Box>
        <Button variant="outlined" className={classes.strikingButton} onClick={goToLogin}>{t("Navbar.Login")}</Button>
        <Button variant="outlined" className={classes.strikingButton} onClick={goToRegister}>{t("Navbar.Register")}</Button>
      </Box>
    )
  }
  const GeneralNavBar = () => {
    return(
      <Box>
        <Box>
        {isLoggued && isUserAdmin
        ?
          <NavBarAdmin></NavBarAdmin>
        :[
          (!isLoggued
          ? 
           <NavBarNoUser></NavBarNoUser>
          :
            <NavBarUser></NavBarUser>
          ) ]
        }
        </Box>
 
      </Box> 
    )
  }


  return (
    <AppBar position="static" className={classes.navbar}>
      <Toolbar>
        <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">   
            <Typography variant="h6" className={classes.title} onClick={goToHome}>{t("Navbar.Home")}</Typography>
            <Box className= {classes.language}>
            {
              i18n.language === "es" ?
                <Button onClick={() => changeLanguage('en')}>{t("Language.English")}</Button>
                :
                <Button onClick={() => changeLanguage('es')}>{t("Language.Spanish")}</Button> 
              }
  
        </Box> 
        </IconButton>   
        <Box className={classes.button}>
          <GeneralNavBar></GeneralNavBar>
        </Box>     
      </Toolbar>
    </AppBar>
  );
  
}
export default withRouter(NavBar);