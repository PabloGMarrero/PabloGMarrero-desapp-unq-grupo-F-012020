import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import Root from './views/Root'
import Register from './views/Register'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path= '/' component={Root}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
      </Switch>
    </Router>
  );
}

export default App;
