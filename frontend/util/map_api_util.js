export const geocodeAddress = (address) => {
  return $.ajax({
    method: 'GET',
    url: 'https://maps.googleapis.com/maps/api/geocode/json',
    data: { key: "AIzaSyDZCdHlJoZFhTH17XDfmQtCF_z_3v3a8lE", address: address }
  });
};

// responseJSON / results / first object / address_components / formatted_address
// responseJSON / results / first object / geometry / location / lat
// responseJSON / results / first object / geometry / location / lng
// responseJSON / results / first object / geometry / bounds / northeast / lat
// responseJSON / results / first object / geometry / bounds / northeast / lng
// responseJSON / results / first object / geometry / bounds / southwest / lng
// responseJSON / results / first object / geometry / bounds / southwest / lng
