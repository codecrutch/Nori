import * as CategoryAPIUtil from '../util/category_api_util';
export const RECEIVE_ALL_CATEGORIES = "RECEIVE_ALL_CATEGORIES";
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";

// Action creators
export const receiveAllCategories = (categories) => {
  return({
    type: RECEIVE_ALL_CATEGORIES,
    categories
  });
};

export const receiveCategory = (category) => {
  return({
    type: RECEIVE_CATEGORY,
    category
  });
};

// Thunk Middleware Async Action Creators
export const fetchAllCategories = () => dispatch => {
  return CategoryAPIUtil.fetchAllCategories()
    .then(
      (categories) => dispatch(receiveAllCategories(categories))
    );
};

export const fetchCategory = (id) => dispatch => {
  return CategoryAPIUtil.fetchCategory(id)
    .then(
      (category) => dispatch(receiveCategory(category))
    );
};
