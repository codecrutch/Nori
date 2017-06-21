import React from 'react';
import SessionForm from './session/session_form_container';
import Greeting from './greeting/greeting_container';
import Header from './header/header';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <Header />
    <Route exact path="/" component={Greeting} />
    <AuthRoute path="/login" component={SessionForm} />
    <AuthRoute path="/signup" component={SessionForm} />
  </div>
);

export default App;
