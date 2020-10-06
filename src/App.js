import React from 'react';
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


function App() {
  return (
    <div className="App">
      <Header></Header>


      <Router>
        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/product/:productkey">
            <Productdetail></Productdetail>
          </Route>
          <Route exxact path="/">
            <Shop></Shop>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
