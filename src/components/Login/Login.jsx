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
import { StoreContext } from '../../context/store-context'
import { useTranslation } from 'react-i18next'
import Alert from '@material-ui/lab/Alert'
import FacebookAuth from 'react-facebook-auth';

const styles = makeStyles((theme) => ({
  paper: {
    marginTop: 100,
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

const btnStyles = {
  backgroundColor: '#008CBA',
  border: 'none',
  color: 'white',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  margin: '4px 2px',
  cursor: 'pointer',
};


const Login = () =>{
  const classes = styles();
  const {setUser} = useContext(UserContext)
  const history = useHistory();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const { t } = useTranslation()
  const [, setStore] = useContext(StoreContext)

  const isEmpty = (value) => {
    return (typeof value === 'undefined' || value === null || value === '');
  }
  const changeEmail = (ev) => setEmail(ev.target.value);
  const changePassword = (ev) => setPassword(ev.target.value);

  const handleSubmit = (resp) =>{
    localStorage.setItem("user", JSON.stringify(resp.data));
    setUser(resp.data)
    setStore({
      id: 0, 
      name: "",
      activity: "",
      street: "",
      number:"",
      locality: "",
      latitude:"",
      longitude:"",
      covDistance: "",
    })
    history.push(`/home`)
  }

   const validateEmail = (email) => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    }
    setError(t("Login.InvalidEmail"));
    return false;
}

  const handleClickLogin = (ev) => {
    ev.preventDefault();
    if (isEmpty(email) || isEmpty(password)) {
      setError(t("Login.MissingValues"))
    }else if (validateEmail(email)){
      authService.login("", email, password)
      .then(resp => {
        handleSubmit(resp)
      })
      .catch((e) => handleError(e));
    }
  }

  const goToRegister = () =>{
    history.push("/register")
  }

  
  const handleError = e => {
    if(e.message === "Network Error"){
      setError(t("Register.InvalidNetwork"))
    }else if (e.response.status === 409){
      setError(t("Register.AlreadyExists"))
    }else{
      setError(t("Login.BadLogin"))
    }
  }
  
  
  const MyFacebookButton = ({ onClick, styles }) => (
    <button onClick={onClick} style={styles}>
      Login with facebook
    </button>
  );
  
  const authenticate = response => {
    const authorized = response
    if (! (authorized.email === undefined)) {
      console.log(authorized.email)
      authService.registerIsUserDoesNotExist(authorized.name, authorized.email, "")
      .then(resp => handleSubmit(resp))
      .catch(e => console.log(e))
      //setDataFacebook(response)
      //setDataFacebook(response);
      //history.push(`/home`)
      
      //console.log(dataFacebook);
      //authService.register(dataFacebook.name, dataFacebook.email, '')
      //           .then(resp1 => authService.login("", dataFacebook.email, "")
      //                                     .then(resp => { handleSubmit(resp)})
      //                                     .catch((e) => setError(t("Login.BadLogin"))) )
      //           .catch( e => {handleError(e)})

    }else{
      alert("no está autorizado")
    }
    
  };
  
  const FaceLogin = () => (
    <div>
      <FacebookAuth
        appId="3168251913232437"
        callback={authenticate}
        fields="name,email"
        scope="public_profile,email,user_friends"
        component={MyFacebookButton}
        icon="fa-facebook" 
        customProps={{ styles: btnStyles }}
      />
    </div>
  )
  
  return (
    <React.Fragment>
      <CssBaseline />
    <Container component="main" maxWidth="xs">
        {error ?
          <Alert severity="error">{error}</Alert>
        :
          null
        }
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
            <Grid container>
              <hr></hr>
              <Grid item>
                <Link href="#" onClick={goToRegister} variant="body2">{t("Login.HaveNotAccount")}</Link>
              </Grid>
            </Grid>
          </form>
        </Box>

        <FaceLogin/> 
      </Container>

      
      </React.Fragment>
  );
}

export default withRouter(Login);