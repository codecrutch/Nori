import {
  RECEIVE_ALL_BUSINESSES,
  RECEIVE_BUSINESS,
  UPDATE_BUSINESS,
  REMOVE_BUSINESS,
  ADD_BUSINESS,
  ADD_UPLOADED_IMAGE
} from "../actions/business_actions";
import merge from 'lodash/merge';

const defaultState = Object.freeze({});

const BusinessReducer = (state = defaultState, action) => {
  let newState;
  let businesses;
  switch (action.type) {
    case RECEIVE_ALL_BUSINESSES:
      return action.businesses;
    case RECEIVE_BUSINESS:
      return action.business;
    case UPDATE_BUSINESS:
      return action.business;
    case REMOVE_BUSINESS:
      newState = merge({}, state);
      delete newState[action.business]
      return newState;
    case ADD_BUSINESS:
      return action.business;
    case ADD_UPLOADED_IMAGE:
      return action.business;
    default:
      return state;
  }
};

export default BusinessReducer;
