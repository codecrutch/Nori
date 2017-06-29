import merge from 'lodash/merge';
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';
import {
  REMOVE_REVIEW,
  CREATE_REVIEW
} from '../actions/review_actions';

const defaultState = Object.freeze({
  currentUser: null,
  errors: [],
  businesses_reviewed: []
});

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, state, { currentUser });
    case RECEIVE_ERRORS:
      const errors = action.errors.responseJSON;
      return merge({}, state, { errors });
    case CREATE_REVIEW:
      newState = merge({}, state);
      newState.businesses_reviewed.push(action.review.business_id);
      return newState;
    case REMOVE_REVIEW:
      newState = merge({}, state);
      newState.businesses_reviewed.splice(newState.businesses_reviewed.indexOf(action.review.id), 1);
      return newState;
    default:
      return state;
  }
};


export default sessionReducer;
