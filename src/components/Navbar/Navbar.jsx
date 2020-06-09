import React from 'react'
//import { makeStyles } from '@material-ui/core/styles';
import './Navbar.css';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
//import Typography from '@material-ui/core/Typography'
//import Button from '@material-ui/core/Button'
//import MenuIcon from '@material-ui/icons/Menu'; 
import {withRouter } from 'react-router';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
      super(props);

  }
  //{coord: {lat: this.props.location.coord.lat , long: this.props.location.coord.lng}

  render() {
      return (

          <AppBar position="static" color="secondary">
            <Toolbar>
              <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">     
                <Link className="nav-link"
                          to={{pathname: "/", state: {coord: this.props.location.coord}}}>Home</Link>              
              </IconButton>   
              <Link className="nav-link"
                          to={{pathname: "/login", state: {coord: this.props.location.coord}}}>Login</Link>
              <Link className="nav-link"
                          to={{pathname: "/register", state: {coord: this.props.location.coord}}}>Register</Link>           
            </Toolbar>
          </AppBar>

      );
    }
  
  }
  export default withRouter(NavBar);
