export const businessToArray = (businesses) => {
  return Object.keys(businesses).map( id => businesses[id]);
};

export const categoryToArray = (categories) => {
  return Object.keys(categories).map( id => categories[id]);
};

export const reviewToArray = (reviews) => {
  return Object.keys(reviews).map( id => reviews[id]);
};
