import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import {useTranslation } from 'react-i18next'

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
  }
}));

const ProfileView = () =>{
  const classes = styles();
  const history = useHistory();
  const {t} = useTranslation();
  const profile = './assets/img/profile.png'
  const  purchase = './assets/img/purchase.png'

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
        </Grid>
  )
}

export default withRouter(ProfileView);