import React, { useState, useContext } from 'react'
import './Navbar.css';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import {withRouter } from 'react-router';
import {Link} from 'react-router-dom';
import { UserContext} from '../../context/user-context'

const NavBar = () => {
  const [user] = useContext(UserContext)
  console.log(user)
  const [isLoggued] = useState(user!==null && user !== undefined && user.name!== "")

  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">     
          <Link className="nav-link"
                    to={{pathname: "/"}}>Home</Link>              
        </IconButton>   
          <div>{isLoggued ?
              <Link className="nav-link" to={{pathname: "/perfil"}}>MiPerfil</Link>
              :
              <div>
                <Link className="nav-link" to={{pathname: "/login"}}>Login</Link>
                <Link className="nav-link" to={{pathname: "/register"}}>Register</Link>
              </div>
              }
          </div>
                
      </Toolbar>
    </AppBar>
  );
  
}
export default withRouter(NavBar);

  /*<AppBar position="static" color="secondary">
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
*/
