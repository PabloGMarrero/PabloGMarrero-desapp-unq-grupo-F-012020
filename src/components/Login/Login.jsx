import React from 'react';
import PropTypes from 'prop-types'
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
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import authService from '../../service/auth-service';
import { withRouter } from 'react-router';

const styles = (theme) => ({
  paper: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: 1,
    backgroundColor: 'theme.palette.secondary.main',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: 1,
  },
  submit: {
    margin: 3,
  },
});

class Login extends React.Component{
  constructor(props){
    super(props);
    
    this.state={
      email:'',
      password:'',
      success:'',
      error: ''
    };
    this.isEmpty = this.isEmpty.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.handleClickLogin = this.handleClickLogin.bind(this);
  }

  componentDidMount(){
    console.log(this.props.history)
    console.log(this.props.location)
  }

  isEmpty(value) {
    return (typeof value === 'undefined' || value === null || value === '');
  }
  changeEmail = (ev) => this.setState({email: ev.target.value, error: ''});
  changePassword = (ev) => this.setState({password: ev.target.value, error: ''});

  componentWillMount() {
    let exito = "" //"" ? this.props.location.state.success : "";
    if(!this.isEmpty(exito)){
        this.setState({success: exito})
    }
  }

  handleSubmit = () =>{
    this.props.history.push(`/home`, 
    {coord: {lat: this.props.location.state.coord.lat , long: this.props.location.state.coord.lng}})
  }

  handleClickLogin(ev) {
    ev.preventDefault();
    const {email, password} = this.state;
    authService.login("", email, password)
      .then(resp => {
        if (resp.data.accesToken){
            localStorage.setItem("user", JSON.stringify(resp.data));
        }
      })
      .then(response => this.handleSubmit()      )
      .catch((e) => console.log(e) && this.setState({error: 'Bad username or password'}));
}
  
  /*render(){
    return(
      <h1>Hola</h1>
    )
  }*/
  render(){

    const {classes} = this.props
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
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
              onChange={this.changeEmail}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.changePassword}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(ev) => this.handleClickLogin(ev)}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}


Login.propTypes = {
  classes: PropTypes.object.isRequired,
}


export default withStyles(styles)(withRouter(Login));//(withStyles(styles)(Login));