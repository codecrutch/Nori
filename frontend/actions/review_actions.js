import * as ReviewAPIUtil from '../util/review_api_util';
export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";

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
  return ({
    type: REMOVE_REVIEW,
    review
  });
};

// Thunk Action creators
export const fetchAllReviews = (businessId) => dispatch => {
  return ReviewAPIUtil.fetchAllReviews(businessId)
    .then(
      (reviews) => dispatch(receiveAllReviews(reviews)),
      (errors) => console.log(errors)
    );
};

export const fetchReview = (id) => dispatch => {
  return ReviewAPIUtil.fetchReview(id)
    .then(
      (review) => dispatch(receiveReview(review)),
      (errors) => console.log(errors)
    );
};

export const deleteReview = (id) => dispatch => {
  return ReviewAPIUtil.deleteReview(id)
    .then(
      (review) => dispatch(removeReview(review)),
      (errors) => console.log(errors)
    );
};
