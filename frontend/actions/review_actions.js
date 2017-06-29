import * as ReviewAPIUtil from '../util/review_api_util';
import Notifications from 'react-notification-system-redux';
export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const CREATE_REVIEW = "CREATE_REVIEW";

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

// Action creators
export const receiveAllReviews = (reviews) => {
  return({
    type: RECEIVE_ALL_REVIEWS,
    reviews
  });
};

export const receiveReview = (review) => {
  return({
    type: RECEIVE_REVIEW,
    review
  });
};

export const removeReview = (review) => {
  return({
    type: REMOVE_REVIEW,
    review
  });
};

export const addReview = (review) => {
  return({
    type: CREATE_REVIEW,
    review
  });
};

// Thunk Action creators
export const fetchAllReviews = (businessId) => dispatch => {
  return ReviewAPIUtil.fetchAllReviews(businessId)
    .then(
      (reviews) => dispatch(receiveAllReviews(reviews)),
      (errors) => displayErrors(errors, dispatch)
    );
};

export const fetchReview = (id) => dispatch => {
  return ReviewAPIUtil.fetchReview(id)
    .then(
      (review) => dispatch(receiveReview(review)),
      (errors) => displayErrors(errors, dispatch)
    );
};

export const deleteReview = (id) => dispatch => {
  return ReviewAPIUtil.deleteReview(id)
    .then(
      (review) => dispatch(removeReview(review)),
      (errors) => displayErrors(errors, dispatch)
    );
};

export const createReview = (review) => dispatch => {
  return ReviewAPIUtil.createReview(review)
    .then(
      (review) => dispatch(addReview(review)),
      (errors) => displayErrors(errors, dispatch)
    );
};
