import merge from 'lodash/merge';
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';

const defaultState = Object.freeze({
  currentUser: null,
  errors: []
});

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, state, { currentUser });
    case RECEIVE_ERRORS:
      const errors = action.errors.responseJSON;
      return merge({}, state, { errors });
    default:
      return state;
  }
};


export default sessionReducer;
