import React from 'react';
import SessionForm from './session/session_form_container';
import Header from './header/header';
import Footer from './footer/footer';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import Notifications from './notifications';
import BusinessIndex from './business/business_index';

const App = () => (
  <div>
    <Header />
    <Notifications />
    <Route path="/businesses" component={BusinessIndex} />
    <AuthRoute path="/login" component={SessionForm} />
    <AuthRoute path="/signup" component={SessionForm} />
    <Footer />
  </div>
);

export default App;
