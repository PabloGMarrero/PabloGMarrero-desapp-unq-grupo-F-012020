import React, {useContext} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import Root from './views/Root'
import RegisterView from './views/Register'
import ProfileView from './views/Profile'
import {CoordenadasContext, CoordenadasProvider } from './context/location-context'
import { UserContext, UserProvider } from './context/user-context'

function App(){
  const coord = useContext(CoordenadasContext)
  const user = useContext(UserContext)

  return (
    <UserProvider value = {user}>
      <CoordenadasProvider value = {coord}>
        <BrowserRouter>
          <Switch>
            <Route exact path= '/' render={props => <Root coord={ props.location.state } />}/>
            <Route exact path='/home' render= {props => <Home coord={ props.location.state }/>}  />
            <Route exact path='/login' render={props => <Login coord={ props.location.state }/>}  />
            <Route exact path='/profile' render={props => <ProfileView coord={ props.location.state }/>}  />
            <Route exact path='/register' render={props => <RegisterView history= {props.history} 
              coord={ props.location.state }/>}   />
          </Switch>
        </BrowserRouter>
      </CoordenadasProvider>
    </UserProvider>
  );
}

export default App;
