import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
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

const RegisterView = () =>{
  const classes = styles();
  const history = useHistory();
  const {t} = useTranslation();
  const store = './assets/img/store.png'
  const user = './assets/img/user.png'

  return (
        <Grid container className={classes.main}>
          <Grid className={classes.box}>
            <Typography component="h2" variant = "h4" className={classes.title}>{t("Register.User")}</Typography>
            <img className={classes.img} src={user} alt={'im'} />
            <Button variant="contained"
              fullWidth
              className={classes.name}
              onClick={()=>history.push("/register/user")}
              >{t("Register.Go")}
            </Button>          
          </Grid>
          <Grid className={classes.box}>
            <Typography component="h2" variant = "h4" className={classes.title}>{t("Register.Store")} </Typography>
            <img className={classes.img} src={store} alt={'im'} />
            <Button variant="contained"
              fullWidth
              className={classes.name}
              onClick={()=>history.push("/register/store")}
              >{t("Register.Go")}
            </Button>
          </Grid>
        </Grid>
  )
}

export default withRouter(RegisterView);