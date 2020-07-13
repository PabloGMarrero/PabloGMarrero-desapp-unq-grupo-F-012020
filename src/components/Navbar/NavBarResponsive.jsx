import React, { useState, useEffect, useContext } from 'react';
import {useHistory, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {  AppBar, Toolbar, Typography,  Grid, SwipeableDrawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles';
import { UserContext} from '../../context/user-context'

const styles = makeStyles((theme) => ({
  padding : {
    paddingRight : 30,
    cursor : "pointer",
  },
  sideBarIcon : {
    padding : 0,
    color : "white",
    cursor : "pointer",
  },
  root: {
    flexGrow: 1
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


const NavBarResponsive = ()=>{
    const {user} = useContext(UserContext)
    const isUserAdmin = user.isAdmin
    const {dataFacebook} = useContext(UserContext) 
    const [isLoggued] = useState((user!==null && user !== undefined && user.email!== "") ||  (dataFacebook.email!== '' &&  dataFacebook!== ""))
    const history = useHistory()
    const { t, i18n } = useTranslation();
    const [drawerActivate, setDrawerActivate] = useState(false)
    const [drawer, setDrawer] = useState(false)
    const classes = styles()

    useEffect( () => { 
        if(window.innerWidth <= 600){
            setDrawerActivate(true)
          }
      
          window.addEventListener('resize',()=>{
            if(window.innerWidth <= 600){
                setDrawerActivate(true)
            }else{
                setDrawerActivate(false)
            }
          });
    }, []);

    const changeLanguage = (language) =>{
        i18n.changeLanguage(language)
    }
    
    const goToHome = () =>{
        history.push("/home")
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
      const goToLogin = () =>{
        history.push("/login")
      }
  //Small Screens
  const CreateDrawer = () =>{
    return (
      <div className={classes.root}>
        <AppBar className={classes.navbar}>
          <Toolbar>
            <Grid container direction = "row" justify = "space-between" alignItems="center">
              <MenuIcon
                className = {classes.sideBarIcon}
                onClick={()=>{setDrawer(true)}} />
              <Typography variant="h6" className={classes.title} onClick={goToHome}>{t("Navbar.Home")}</Typography>
              <Typography color="inherit" variant = "headline"></Typography>
            </Grid>
          </Toolbar>
        </AppBar>

        <SwipeableDrawer
         open={drawer}
         onClose={()=>{setDrawer(false)}}
         onOpen={()=>{setDrawer(true)}}>

           <div
             tabIndex={0}
             role="button"
             onClick={()=>{setDrawer(false)}}
             onKeyDown={()=>{setDrawer(true)}}>

            {/* <List className = {classes.list}>
               <ListItem key = {1} button divider> Option 1 </ListItem>
               <ListItem key = {2} button divider> Option 2 </ListItem>
               <ListItem key = {3} button divider> Option 3 </ListItem>
             </List> */}
             <GeneralNavBar></GeneralNavBar>

         </div>
       </SwipeableDrawer>

      </div>
    );
  }

  //Larger Screens
  const DestroyDrawer = () =>{
    return (
      <AppBar className={classes.navbar}>
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
          {/* <Typography variant = "subheading" className = {classes.padding} color="inherit" >OPTION 1</Typography>
          <Typography variant = "subheading" className = {classes.padding} color="inherit" >OPTION 2</Typography>
          <Typography variant = "subheading" className = {classes.padding} color="inherit" >OPTION 3</Typography> */}
        </Toolbar>
      </AppBar>
    )
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

    return(
      <div>
        {drawerActivate ? <CreateDrawer></CreateDrawer> : <DestroyDrawer></DestroyDrawer>}
      </div>
    );
}

NavBarResponsive.propTypes = {
  classes : PropTypes.object.isRequired
};



export default withRouter(NavBarResponsive);