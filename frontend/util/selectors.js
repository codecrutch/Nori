export const businessToArray = (businesses) => {
  return Object.keys(businesses).map( id => businesses[id]);
};


