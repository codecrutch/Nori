export const fetchAllBusinesses = (query) => {
  return $.ajax({
    method: 'GET',
    url: '/api/businesses',
    data: { q: query }
  });
}
