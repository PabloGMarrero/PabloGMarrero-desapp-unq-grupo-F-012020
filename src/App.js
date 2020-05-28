import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import Root from './views/Root'
import Register from './views/Register'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path= '/' render={props => <Root {...props} />}/>
        <Route exact path='/home'  render={props => <Home coord={ props.location.state }/>}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
