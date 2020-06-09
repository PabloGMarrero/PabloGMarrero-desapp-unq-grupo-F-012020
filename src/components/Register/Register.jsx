import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles';
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

const styles = theme => ({
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
    width: '100%', // Fix IE 11 issue.
    marginTop: 3,
  },
  submit: {
    margin: 3,
  },
});

class RegisterView extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:'',
      email:'',
      password:'',
      error: ''
    };
    this.isEmpty = this.isEmpty.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.handleClickRegistrar = this.handleClickRegistrar.bind(this);
  }

  componentDidMount(){
    console.log("Estoy en register" + this.props)
  }

  isEmpty(value) {
    return (typeof value === 'undefined' || value === null || value === '');
  }

  validateEmail(email) {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          return true;
      }
      this.setState({error: 'Por favor, introduzca un email válido.'});
      return false;
  }

  handleClickRegistrar(ev) {
    ev.preventDefault();
    const {name, email, password} = this.state;
    if (this.isEmpty(name) && this.isEmpty(email) && this.isEmpty(password)) {
        this.setState({error: 'Por favor, complete todos los campos.'})
    } else {
        if (this.validateEmail(email)) {
            authService.register(name, email, password)
              .then(response =>  this.props.history.push(`/login`,{coord: {lat: this.state.lat , long: this.state.lng}, success: response.data}))
              .catch( e => console.log(e))
                /*.then(response =>  this.props.history.push(`/`, {success: response.data}))
                .catch((error) => this.setState({error: error.response.data.message}));*/
        }
    }
}

  render(){
    const {classes} = this.props
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
                  onChange={(ev) => this.setState({ name: ev.target.value, error: ''})}
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
                  onChange={(ev) => this.setState({ email: ev.target.value, error: ''})}
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
                  onChange={(ev) => this.setState({ password: ev.target.value, error: ''})}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <button onClick={ (ev) => this.handleClickRegistrar(ev)}>Sign Up</button>
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
}

/*             type="submit"
fullWidth
variant="contained"
color="primary"
className={classes.submit}
*/

RegisterView.propTypes = {
  classes: PropTypes.object.isRequired,
};

withRouter(RegisterView);
export default withStyles(styles)(RegisterView);