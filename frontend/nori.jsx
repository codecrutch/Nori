import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as actions from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser, errors: [] } };
    store = configureStore(preloadedState);
    
  } else {
    store = configureStore();
  }

  // JUST FOR TESTING
    window.login = actions.login;
    window.signup = actions.signup;
    window.logout = actions.logout;

    window.getState = store.getState;
    window.dispatch = store.dispatch;

  //
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});

//store.dispatch(actions.login({ user: {username: 'todd', password: 'idontknow'}}));
