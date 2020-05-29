import React from 'react'
//import { makeStyles } from '@material-ui/core/styles';
import './Navbar.css';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
//import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'; 
import {withRouter} from "react-router-dom";


class NavBar extends React.Component {
  constructor(props) {
      super(props);

  }  ;

      render() {
      return (

          <AppBar position="static" color="primary">
            <Toolbar>
              <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">                   
                <MenuIcon onClick={() => this.props.history.push('/home',{coord: {lat: this.state.lat , long: this.state.lng}})}>                    
                </MenuIcon>
              </IconButton>              
              <Button color="inherit"  onClick={() => this.props.history.push(`/login`)} >Login</Button>
              <Button color="inherit" onClick={() => this.props.history.push(`/register`)}>Register</Button>
            </Toolbar>
          </AppBar>

      );
    }
  }
  export default withRouter(NavBar);


