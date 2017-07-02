import {
  RECEIVE_ALL_BUSINESSES,
  RECEIVE_BUSINESS,
  UPDATE_BUSINESS,
  REMOVE_BUSINESS,
  ADD_BUSINESS,
  ADD_UPLOADED_IMAGE,
  CLEAR_BUSINESSES
} from "../actions/business_actions";
import merge from 'lodash/merge';

const defaultState = Object.freeze({
  allBusinesses: {},
  currentBusiness: {}
});

const BusinessReducer = (state = defaultState, action) => {
  let newState;

  switch (action.type) {
    case RECEIVE_ALL_BUSINESSES:
      newState = merge({}, state);
      newState.allBusinesses = action.businesses;
      return newState
    case RECEIVE_BUSINESS:
      newState = merge({}, state);
      newState.allBusinesses[action.business.id] = action.business;
      newState.currentBusiness = action.business;
      return newState
    case UPDATE_BUSINESS:
      newState = merge({}, state);
      newState.allBusinesses[action.business.id] = action.business;
      newState.currentBusiness = action.business;
      return newState
    case REMOVE_BUSINESS:
      newState = merge({}, state);
      delete newState.allBusinesses[action.business];
      newState.currentBusiness = {};
      return newState;
    case ADD_BUSINESS:
      newState = merge({}, state);
      newState.allBusinesses[action.business.id] = action.business;
      newState.currentBusiness = action.business;
      return newState;
    case ADD_UPLOADED_IMAGE:
      newState = merge({}, state);
      newState.allBusinesses[action.business.id] = action.business;
      newState.currentBusiness = action.business;
      return newState;
    case CLEAR_BUSINESSES:
      newState = merge({}, state);
      newState.allBusinesses = {};
      newState.currentBusiness = {};
      return newState;
    default:
      return state;
  }
};

export default BusinessReducer;
