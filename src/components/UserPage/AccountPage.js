import React from 'react';
import { AuthUserContext, withAuthorisation } from '../Session';
import UserDashboard from '../../containers/UserDashboard';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
            <UserDashboard /> 
      </div>
    )}
  </AuthUserContext.Consumer>
);
const condition = authUser => !!authUser;
export default withAuthorisation(condition)(AccountPage);