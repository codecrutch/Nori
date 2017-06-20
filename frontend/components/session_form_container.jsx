import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
    formType: ownProps.location.pathname.slice(1)
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return({
    processForm: (user) => { processForm(dispatch, ownProps)(user)}
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
