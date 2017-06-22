import {
  RECEIVE_ALL_BUSINESSES,
  RECEIVE_BUSINESS,
  UPDATE_BUSINESS,
  REMOVE_BUSINESS
} from "../actions/business_actions";

const defaultState = Object.freeze({});

const BusinessReducer(state = defaultState, action) {
  switch (action.type) {
    case RECEIVE_ALL_BUSINESSES:
    case RECEIVE_BUSINESS:
    case UPDATE_BUSINESS:
    case REMOVE_BUSINESS:
    default:
      return state;
  }
};
