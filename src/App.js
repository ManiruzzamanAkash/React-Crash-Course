import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/style.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import routes from './routes';
import HeaderMenu from './components/navbar/HeaderMenu';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav> */}
        <HeaderMenu />

        <div className="content-area p-5">
          <Switch>
            {
              routes.map((route, index) => (
                <Route
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))
            }
          </Switch>
        </div>

        {/* <h2 className="name">Welcome to React JS</h2> */}
      </div>
    </Router>
  );
}

export default App;
