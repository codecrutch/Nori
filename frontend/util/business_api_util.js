export const fetchAllBusinesses = (query) => {
  return $.ajax({
    method: 'GET',
    url: '/api/businesses',
    data: { q: query }
  });
}

export const deleteBusiness = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/businesses/${id}`,
    data: id
  })
}
