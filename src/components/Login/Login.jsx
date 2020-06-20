import React, { useContext, useState }  from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box'
import authService from '../../service/auth-service';
import { UserContext } from '../../context/user-context'
import { useTranslation } from 'react-i18next'

const styles = makeStyles((theme) => ({
  paper: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: 1,
    backgroundColor: '#E59500'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: 1,
  },
  submit: {
    margin: 3,
    backgroundColor: '#E59500'
  },
}));


const Login = () =>{
  const classes = styles();
  const [,setUser] = useContext(UserContext)
  const history = useHistory();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { t } = useTranslation()

  const isEmpty = (value) => {
    return (typeof value === 'undefined' || value === null || value === '');
  }
  const changeEmail = (ev) => setEmail(ev.target.value);
  const changePassword = (ev) => setPassword(ev.target.value);

  const handleSubmit = (resp) =>{
    setUser(resp.data)
    history.push(`/home`)
  }

  const handleClickLogin = (ev) => {
    ev.preventDefault();
    if (isEmpty(email) && isEmpty(password)) {
      setError('Por favor, complete todos los campos.')
    }else{
      authService.login("", email, password)
      .then(resp => {
        handleSubmit(resp)
        if (resp.data.accesToken){
            localStorage.setItem("user", JSON.stringify(resp.data));
        }
      })
      .catch((e) => setError('Bad username or password'));
    }
  }

  const goToRegister = () =>{
    history.push("/register")
  }
  
  return (
    <React.Fragment>
      <CssBaseline />
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">{t("Login.Signin")}</Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={changeEmail}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label= {t("Login.Password")}
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={changePassword}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={t("Login.Remember")}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              onClick={(ev) => handleClickLogin(ev)}
              >{t("Login.Signin")}
            </Button>
            {error ? <p>{error} </p> : <p></p> }
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">{t("Login.ForgotPass")}</Link>
              </Grid>
              <hr></hr>
              <Grid item>
                <Link href="#" onClick={goToRegister} variant="body2">{t("Login.HaveNotAccount")}</Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
      </React.Fragment>
  );
}

export default withRouter(Login);