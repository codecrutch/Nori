import {
  RECEIVE_ALL_REVIEWS,
  RECEIVE_REVIEW,
  REMOVE_REVIEW,
  CREATE_REVIEW
} from '../actions/review_actions';
import merge from 'lodash/merge';

const ReviewReducer = (state = {}, action) => {
  let newState;
  let review;
  let reviews;
  switch (action.type) {
    case RECEIVE_ALL_REVIEWS:
      return action.reviews;
    case RECEIVE_REVIEW:
      return action.review;
    case REMOVE_REVIEW:
      newState = merge({}, state);
      delete newState[action.review.id];
      return newState;
    case CREATE_REVIEW:
      review = action.review;
      newState = merge({}, state);
      newState[review.id] = review;
      return newState;
    default:
      return state;
  };
};

export default ReviewReducer;
