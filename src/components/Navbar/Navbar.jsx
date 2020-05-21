import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './Navbar.css';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'; 
import {Link, withRouter} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

class NavBar extends React.Component {
  constructor(props) {
      super(props);

  }  ;

      render() {
      return (
        <div className="root">
          <AppBar position="static" color="primary">
            <Toolbar>
              <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className="title">
                Compra en casa!
              </Typography>
              <Button color="inherit"  onClick={() => this.props.history.push(`/login`)} >Login</Button>
              <Button color="inherit" onClick={() => this.props.history.push(`/register`)}>Register</Button>
            </Toolbar>
          </AppBar>
        </div>
      );
    }
  }
  export default withRouter(NavBar);
