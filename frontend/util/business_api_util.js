export const fetchAllBusinesses = (query) => {
  return $.ajax({
    method: 'GET',
    url: '/api/businesses',
    data: { q: query }
   });
};

export const fetchAllBusinessesByCategory = (category) => {
  return $.ajax({
    method: 'GET',
    url: '/api/businesses',
    data: { category: category}
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
    dataType: "json",
    contentType: false,
    processData: false,
    url: '/api/businesses',
    data: business
  });
};

export const editBusiness = (business) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/businesses/${business.id}`,
    data: { business }
  });
};

export const uploadImage = (uploaded_image) => {
  return $.ajax({
    method: 'POST',
    url: '/api/uploaded_images',
    dataType: "json",
    contentType: false,
    processData: false,
    data: uploaded_image
  });
};
