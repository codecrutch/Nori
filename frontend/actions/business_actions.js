import * as BusinessAPIUtil from '../util/business_api_util';
export const RECEIVE_ALL_BUSINESSES = "RECEIVE_ALL_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const UPDATE_BUSINESS = "UPDATE_BUSINESS";
export const REMOVE_BUSINESS = "REMOVE_BUSINESS";

// action creators
export const receiveAllBusinesses = (businesses) => {
  return ({
    type: RECEIVE_ALL_BUSINESSES,
    businesses
  });
}


// thunk async action creators
export const fetchAllBusinesses = (query) => (dispatch) => {
  return BusinessAPIUtil.fetchAllBusinesses(query)
    .then(
      businesses => dispatch(receiveAllBusinesses(businesses)),
      error => dispatch(receiveErrors(error))
    )
};
