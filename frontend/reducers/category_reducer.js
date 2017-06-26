import {
  RECEIVE_ALL_CATEGORIES,
  RECEIVE_CATEGORY
} from '../actions/category_actions';
import merge from 'lodash/merge';

const CategoryReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_CATEGORIES:
      return merge({}, state, action.categories);
    case RECEIVE_CATEGORY:
      return merge({}, state, action.category);
    default:
      return state;
  };
};

export default CategoryReducer;
