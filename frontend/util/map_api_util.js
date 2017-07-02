export const geocodeAddress = (address) => {
  return $.ajax({
    method: 'GET',
    url: '/api/businesses/geocode',
    data: { address: address }
  });
};

// responseJSON / results / first object / address_components / formatted_address
// responseJSON / results / first object / geometry / location / lat
// responseJSON / results / first object / geometry / location / lng
// responseJSON / results / first object / geometry / bounds / northeast / lat
// responseJSON / results / first object / geometry / bounds / northeast / lng
// responseJSON / results / first object / geometry / bounds / southwest / lng
// responseJSON / results / first object / geometry / bounds / southwest / lng
