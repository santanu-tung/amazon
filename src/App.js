import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Rivew/Review';
import Inventory from './components/Inventory/Inventory';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Productdetail from './components/Productdetail/Productdetail';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()


function App() {
  const [loginUser, SetLoginUser] = useState({})
  return (
    <UserContext.Provider value={[loginUser, SetLoginUser]} className="App">

      <Router>
        <p> email {loginUser.email}</p>
        <Header></Header>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <PrivateRoute path="/inventory">
            <Inventory></Inventory>
          </PrivateRoute>
          <Route path="/login">
            <Login ></Login>
          </Route>
          <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>
          <Route path="/product/:productkey">
            <Productdetail></Productdetail>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

      </Router>

    </UserContext.Provider>
  );
}

export default App;
