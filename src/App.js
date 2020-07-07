import React, {useContext} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import Root from './views/Root'
import RegisterView from './views/Register'
import ProfileView from './views/Profile'
import StoreView from './views/AddStore'
import ProductView from './views/AddProduct'
import PurchaseView from './views/Purchase'
import RegisteStoreView from './views/AddStore'
import {CoordenadasContext, CoordenadasProvider } from './context/location-context'
import { UserContext, UserProvider } from './context/user-context'
import { PurchaseContext, PurchaseProvider } from './context/purchase-context'
import RegisterUserView from './views/RegisterUser';
import { StoreContext, StoreProvider } from './context/store-context';

function App(){
  const coord = useContext(CoordenadasContext)
  const user = useContext(UserContext)
  const store = useContext(StoreContext)

  return (
    <StoreProvider value = {store}>
      <UserProvider value = {user}>
        <CoordenadasProvider value = {coord}>
          <PurchaseProvider>
          <BrowserRouter>
            <Switch>
              <Route exact path= '/' render={props => <Root coord={ props.location.state } />}/>
              <Route exact path='/home' render= {props => <Home coord={ props.location.state }/>}  />
              <Route exact path='/login' render={props => <Login coord={ props.location.state }/>}  />
              <Route exact path='/profile' render={props => <ProfileView coord={ props.location.state }/>}  />
              <Route exact path='/addstore' render={props => <StoreView coord={ props.location.state }/>}  />
              <Route exact path='/addproduct' render={props => <ProductView coord={ props.location.state }/>}  />
              <Route exact path='/purchase' render={props => <PurchaseView coord={ props.location.state }/>}  />
              <Route exact path='/register' render={props => <RegisterUserView history= {props.history} coord={ props.location.state }/>}/>
              <Route exact path='/register/user' render={props=><RegisterUserView coord={props.location.state} />}/>
              <Route exact path='/register/store' render={props=><RegisteStoreView coord={props.location.state}/>}/>

            </Switch>
          </BrowserRouter>
          </PurchaseProvider>
        </CoordenadasProvider>
      </UserProvider>
    </StoreProvider>
  );
}

export default App;
