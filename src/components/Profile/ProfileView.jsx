import React, { useState, useContext } from 'react'
import { withRouter, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import {useTranslation } from 'react-i18next'
import { UserContext} from '../../context/user-context'


const styles = makeStyles((theme) => ({
  main:{
    display: "flex",
    justifyContent: "center",
  },
  box: {
    padding: "10px"
  },
  title:{
    color: "#2B2D42",
    textAlign: "center",
    fontFamily: "sans-serif"
  },
  img:{
    width: "20vh",
    margin: "0 auto",
  },
  name: {
      background: '#EDF2F4'
  },
  strikingButton:{
    color: "#EDF2F4",
    background:  "#2B2D42",
    margin: theme.spacing(0, 2, 0, 0)
  },
}));

const ProfileView = () =>{
  const classes = styles();
  const history = useHistory();
  const {t} = useTranslation();
  const profile = './assets/img/profile.png'
  const purchase = './assets/img/purchase.png'
  const product = './assets/img/product.png'
  const {user} = useContext(UserContext)
  const isUserAdmin = user.isAdmin 
  const [isLoggued] = useState(user!==null && user !== undefined && user.email!== "")

    //const goToAddStore = () =>{
    // history.push("/addstore")
  //}

const goToAddProduct = () =>{
   history.push("/addproduct")
  } 


  const AddButtons = () => {

    return (
            <Grid className={classes.box}>
              <Typography component="h2" variant = "h4" className={classes.title}>{t("Profile.AddProduct")} </Typography>
                 <img className={classes.img} src={product} alt={'im'} />
                  <Button variant="contained"
                      fullWidth
                      className={classes.name}
                      onClick={goToAddProduct}
                      >{t("Register.Go")}
                  </Button>
            </Grid>
    )
  }
   //   <Button className={classes.strikingButton} onClick={goToAddStore}>Agregar Comercio</Button>      
  return (
        <Grid container className={classes.main}>
          <Grid className={classes.box}>
            <Typography component="h2" variant = "h4" className={classes.title}>{t("Profile.Profile")}</Typography>
            <img className={classes.img} src={profile} alt={'im'} />
            <Button variant="contained"
              fullWidth
              className={classes.name}
              onClick={()=>history.push("/profile/update")}
              >{t("Register.Go")}
            </Button>          
          </Grid>
          <Grid className={classes.box}>
            <Typography component="h2" variant = "h4" className={classes.title}>{t("Profile.PurchaseHistory")} </Typography>
            <img className={classes.img} src={purchase} alt={'im'} />
            <Button variant="contained"
              fullWidth
              className={classes.name}
              onClick={()=>history.push("/profile/history")}
              >{t("Register.Go")}
            </Button>
            </Grid>
            {isLoggued && isUserAdmin ? <AddButtons> </AddButtons>
            
             : null }
          
        </Grid>
  )
}

export default withRouter(ProfileView);