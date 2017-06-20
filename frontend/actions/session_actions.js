import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (currentUser) => {
  return ({
    type: RECEIVE_CURRENT_USER,
    currentUser
  });
};

export const receiveErrors = (state) => {
  let errors = state;
  return ({
    type: RECEIVE_ERRORS,
    errors
  });
};

export const login = (user) => dispatch => {
   return APIUtil.login(user)
    .then(
      (user) => dispatch(receiveCurrentUser(user)),
      (errors) => dispatch(receiveErrors(errors))
    );
  };

export const logout = () => dispatch => (
   APIUtil.logout()
    .then(
      () => dispatch(receiveCurrentUser(null)),
      (errors) => dispatch(receiveErrors(errors))
    )
);

export const signup = (user) => dispatch => {
   return APIUtil.signup(user)
    .then(
      (user) => { debugger; dispatch(receiveCurrentUser(user))},
      (errors) => { debugger; dispatch(receiveErrors(errors))}
    )
};
