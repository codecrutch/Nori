import {
  RECEIVE_ALL_BUSINESSES,
  RECEIVE_BUSINESS,
  UPDATE_BUSINESS,
  REMOVE_BUSINESS
} from "../actions/business_actions";
import merge from 'lodash/merge';

const defaultState = Object.freeze({});

const BusinessReducer = (state = defaultState, action) => {
  let newState;
  let businesses;
  switch (action.type) {
    case RECEIVE_ALL_BUSINESSES:
      businesses = action.businesses;
      return merge({}, state, businesses);
    case RECEIVE_BUSINESS:
      businesses = action.businesses;
      return merge({}, state, businesses);
    case UPDATE_BUSINESS:
      newState = merge({}, state);
      newState[action.business.id] = action.business;
      return newState;
    case REMOVE_BUSINESS:
      newState = merge({}, state);
      delete newState[action.business]
      return newState;
    default:
      return state;
  }
};

export default BusinessReducer;
