import React, { useState } from 'react';
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
import authService from '../../service/auth-service';
import { Button } from '@material-ui/core';
import Box from '@material-ui/core/Box'
import {useTranslation } from 'react-i18next'
import Alert from '@material-ui/lab/Alert'
import Snackbar from '@material-ui/core/Snackbar';

const styles = makeStyles((theme) => ({
  paper: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: 1,
    backgroundColor: '#E59500',
  },
  form: {
    width: '100%',
    marginTop: 3,
  },
  submit: {
    margin: 3,
  },
  register:{
    background: '#E59500'
  }
}));

const RegisterUser = () =>{
  const classes = styles();
  const history = useHistory();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const {t} = useTranslation()
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false)

  const isEmpty = (value) => {
    return (typeof value === 'undefined' || value === null || value === '');
  }

  const validateEmail = (email) => {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          return true;
      }
      setError(t("Login.InvalidEmail"));
      return false;
  }

  const handleClickRegistrar = (ev) => {
    ev.preventDefault();
    if (isEmpty(name) && isEmpty(email) && isEmpty(password)) {
      setError(t("Login.MissingValues"))
    } else {
        if (validateEmail(email)) {
            authService.register(name, email, password)
              .then(response => goToLogin() )
              .catch( e => {
                handleError(e)
              })
        }
    }
  }

  const handleError = e => {
    if(e.message === "Network Error"){
      setError(t("Register.InvalidNetwork"))
    }else if (e.response.status === 409){
      setError(t("Register.AlreadyExists"))
    }
  }

  const handleClose = (event, reason) =>{
    if (reason === 'clickaway') {
      return;
    }

    setRegistrationSuccessful(false);
    history.push("/login")
  }

  const goToLogin = () =>{
    setRegistrationSuccessful(true)
    //history.push("/login")
  }
  return (
        <Box className="container">
          <Container component="main" maxWidth="xs">
            {error ?
              <Alert severity="error">{error}</Alert>
            :
              <p></p>
            }
            <Snackbar open={registrationSuccessful} autoHideDuration={3000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                {t("Register.Success")}
              </Alert>
            </Snackbar>
          <CssBaseline />
          <Box className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {t("Register.Signup")}
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label={t("Register.FirstName")}
                    autoFocus
                    onChange={(ev) => setName(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label={t("Register.LastName")}
                    name="lastName"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label={t("Register.Email")}
                    name="email"
                    autoComplete="email"
                    onChange={(ev) => setEmail(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label={t("Register.Password")}
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(ev) =>setPassword(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label={t("Register.InfoEmail")}
                  />
                </Grid>
              </Grid>
              <Button 
                type="submit"
                fullWidth
                className={classes.register} 
                onClick={ (ev) => handleClickRegistrar(ev)}
                >{t("Register.Signup")}
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="#" onClick={goToLogin} variant="body2">{t("Register.HaveAccount")}</Link>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Container>
        </Box>
  )
}

export default withRouter(RegisterUser);