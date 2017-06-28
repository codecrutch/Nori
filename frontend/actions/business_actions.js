import * as BusinessAPIUtil from '../util/business_api_util';
import Notifications from 'react-notification-system-redux';
export const RECEIVE_ALL_BUSINESSES = "RECEIVE_ALL_BUSINESSES";
export const RECEIVE_BUSINESS = "RECEIVE_BUSINESS";
export const UPDATE_BUSINESS = "UPDATE_BUSINESS";
export const REMOVE_BUSINESS = "REMOVE_BUSINESS";
export const ADD_BUSINESS = "ADD_BUSINESS";


// Custom Error Display

const displayErrors = (errors,dispatch) => {
  errors.responseJSON.forEach( error => dispatch(Notifications.warning(notify("Warning", error)) ))
}

const notify = (title, message = "") => {
  return ({
    title: title,
    message: message,
    position: 'tc',
    autoDismiss: 5,
  });
};

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

export const addBusiness = (business) => {
  return ({
    type: ADD_BUSINESS,
    business
  });
};

// thunk async action creators
export const fetchAllBusinesses = (query, category) => (dispatch) => {
  return BusinessAPIUtil.fetchAllBusinesses(query, category)
    .then(
      businesses => dispatch(receiveAllBusinesses(businesses)),
      errors => displayErrors(errors, dispatch)
    )
};

export const fetchAllBusinessesByCategory = (category) => (dispatch) => {
  return BusinessAPIUtil.fetchAllBusinessesByCategory(category)
    .then(
      businesses => dispatch(receiveAllBusinesses(businesses)),
      errors => displayErrors(errors, dispatch)
    )
};

export const fetchBusiness = (id) => (dispatch) => {
  return BusinessAPIUtil.fetchBusiness(id)
    .then(
      business => dispatch(receiveBusiness(business)),
      errors => displayErrors(errors, dispatch)
    )
};

export const createBusiness = (business) => (dispatch) => {
  debugger
  return BusinessAPIUtil.createBusiness(business)
    .then(
      business => dispatch(addBusiness(business)),
      errors => displayErrors(errors, dispatch)
    );
};

export const deleteBusiness = (id) => (dispatch) => {
  return BusinessAPIUtil.deleteBusiness(id)
    .then(
      business => dispatch(removeBusiness(business)),
      errors => displayErrors(errors, dispatch)
    );
};

export const editBusiness = (business) => (dispatch) => {
  return BusinessAPIUtil.editBusiness(business)
    .then(
      business => dispatch(updateBusiness(business)),
      errors => displayErrors(errors, dispatch)
    );
};
