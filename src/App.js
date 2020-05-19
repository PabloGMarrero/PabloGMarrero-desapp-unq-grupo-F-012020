import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Location from './components/Location/Location'
import Register from './components/Register/Register'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path= '/' component={Location}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>
      </Switch>
    </Router>
  );
}

export default App;
