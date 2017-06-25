export const fetchAllBusinesses = (query) => {
  return $.ajax({
    method: 'GET',
    url: '/api/businesses',
    data: { q: query }
  });
};

export const fetchBusiness = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/businesses/${id}`
  });
};

export const deleteBusiness = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/businesses/${id}`,
    data: id
  });
};

export const createBusiness = (business) => {
  return $.ajax({
    method: 'POST',
    url: '/api/businesses',
    data: { business }
  });
};

export const editBusiness = (business) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/businesses/${business.id}`,
    data: { business }
  });
};
