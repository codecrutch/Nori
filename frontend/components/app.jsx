import React from 'react';
import SessionForm from './session_form_container';
import Greeting from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>Nori</h1>
      <Route exact path="/" component={Greeting} />
      <AuthRoute path="/login" component={SessionForm} />
      <AuthRoute path="/signup" component={SessionForm} />
    </header>
  </div>
);

export default App;
