import * as APIUtil from '../util/session_api_util';
import Notifications from 'react-notification-system-redux';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (currentUser) => {
  return ({
    type: RECEIVE_CURRENT_USER,
    currentUser
  });
};

export const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_ERRORS,
    errors
  });
};

export const login = (user) => dispatch => {
   return APIUtil.login(user)
    .then(
      (user) => dispatch(receiveCurrentUser(user)),
      error => dispatch(Notifications.error({title: error.responseJSON}))
    );
  };

export const logout = () => dispatch => (
   APIUtil.logout()
    .then(
      () => dispatch(receiveCurrentUser(null)),
      error => dispatch(Notifications.error({title: error.responseJSON}))
    )
);

export const signup = (user) => dispatch => {
   return APIUtil.signup(user)
    .then(
      (user) => dispatch(receiveCurrentUser(user)),
      error => dispatch(Notifications.error({title: error.responseJSON}))
    );
};
