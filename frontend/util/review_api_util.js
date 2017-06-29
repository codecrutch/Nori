export const fetchReview = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/reviews/${id}`
  });
};

export const fetchAllReviews = (businessId) => {
  return $.ajax({
    method: 'GET',
    url: '/api/reviews',
    data: { business_id: businessId }
  });
};

export const deleteReview = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/reviews/${id}`,
    data: id
  });
};

export const createReview = (review) => {
  return $.ajax({
    method: 'POST',
    url: '/api/reviews',
    data: { review }
  });
};
