import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    loggedIn: Boolean(state.session.currentUser),
    formType: ownProps.location.pathname.slice(1)
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    processForm: (user) => { processForm(dispatch, ownProps)(user)},
    guestLogin: () => dispatch(login({ username: "Guest", password: "password"}))
  });
};

const processForm = (dispatch, ownProps) => {
  if (ownProps.location.pathname === '/login') {
    return (user) => dispatch(login(user));
  } else {
    return (user) => dispatch(signup(user));
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
