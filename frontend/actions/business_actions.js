import * as BusinessAPIUtil from '../util/business_api_util';
import Notifications from 'react-notification-system-redux';
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
};

export const receiveBusiness = (business) => {
  return ({
    type: RECEIVE_BUSINESS,
    business
  });
};

export const updateBusiness = (business) => {
  return ({
    type: UPDATE_BUSINESS,
    business
  });
};

export const removeBusiness = (business) => {
  return ({
    type: REMOVE_BUSINESS,
    business
  });
};

// thunk async action creators
export const fetchAllBusinesses = (query) => (dispatch) => {
  return BusinessAPIUtil.fetchAllBusinesses(query)
    .then(
      businesses => dispatch(receiveAllBusinesses(businesses)),
      error => dispatch(Notifications.error({title: error.responseJSON}))
    )
};

export const deleteBusiness = (id) => (dispatch) => {
  return BusinessAPIUtil.deleteBusiness(id)
    .then(
      business => dispatch(removeBusiness(business)),
      error => dispatch(Notifications.error({title: error.responseJSON}))
    );
};
