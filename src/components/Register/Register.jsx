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

const styles = makeStyles((theme) => ({
  paper: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: 1,
    backgroundColor: '#FE6B8B',
  },
  form: {
    width: '100%',
    marginTop: 3,
  },
  submit: {
    margin: 3,
  },
}));

const RegisterView = () =>{
  const classes = styles();
  const history = useHistory();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [setError] = useState("")
  
  const isEmpty = (value) => {
    return (typeof value === 'undefined' || value === null || value === '');
  }

  const validateEmail = (email) => {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          return true;
      }
      setError('Por favor, introduzca un email válido.');
      return false;
  }

  const handleClickRegistrar = (ev) => {
    ev.preventDefault();
    if (isEmpty(name) && isEmpty(email) && isEmpty(password)) {
      setError('Por favor, complete todos los campos.')
    } else {
        if (validateEmail(email)) {
            authService.register(name, email, password)
              .then(response =>  history.push(`/login`))
              .catch( e => console.log(e))
        }
    }
  }

  return (
        <div className="container">
          <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
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
                    label="First Name"
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
                    label="Last Name"
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
                    label="Email Address"
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
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(ev) =>setPassword(ev.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <button onClick={ (ev) => handleClickRegistrar(ev)}>Sign Up</button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
        </div>
  )
}

export default withRouter(RegisterView);