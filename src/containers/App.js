import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import * as ROUTES from '../constants/routes';
import { withFirebase } from '../components/Firebase';
import { AuthUserContext } from '../components/Session'
import { withAuthentication } from '../components/Session'

//components

import Navigation from '../components/Navigation';
import Homepage from './HomePage';
import UserDashboard from './UserDashboard';
import AccountPage from '../components/UserPage/AccountPage';

const App = () => (
  <Router>
    <div classname="App">
      <Navigation />
      <hr />

      <Route exact path={ROUTES.HOME} component={Homepage} />
      <Route path={ROUTES.DASHBOARD} component={AccountPage} />

    </div>
  </Router>
);
export default withAuthentication(App);
