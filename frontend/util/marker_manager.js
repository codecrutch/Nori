class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(businesses){
    const businessesObj = {};
    businesses.forEach(business => businessesObj[business.id] = business);

    businesses
      .filter(business => !this.markers[business.id])
      .forEach(newBusiness => this.createBusinessMarker(newBusiness, this.handleClick))

    Object.keys(this.markers)
      .filter(businessId => !businessesObj[businessId])
      .forEach((businessId) => this.removeMarker(this.markers[businessId]))
  }

  createBusinessMarker(business) {
    const position = new google.maps.LatLng(business.lat, business.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      businessId: business.id,
      icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    });

    let contentString = '<div id="content">'+
      `<h5 id="firstHeading" class="firstHeading">${business.name}</h5>`+
      `<div id="bodyContent"><div>${business.address}</div>`+
      `<div>${business.review_count} reviews</div>`+
      '</div>';

    let infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: '0px',
      maxHeight: '0px'
    });

    marker.addListener('click', () => this.handleClick(business));
    let el = document.getElementById(`${business.name}`);

    marker.addListener('mouseover', () => {
     infowindow.open(map, marker);
      el.style["box-shadow"] = "-2px 2px 20px 0px #dfdfdf";
      el.style["color"] = "#c22020";
      el.style["border-radius"] = "5px";
    });

    marker.addListener('mouseout', () => {
      infowindow.close(map, marker);
      el.style["box-shadow"] = "none";
      el.style["color"] = "inherit";
      el.style["border-radius"] = "0";
    });

    el.addEventListener('mouseenter', (e) => {
      this.map.panTo(position);
      infowindow.open(map, marker);
      el.style["box-shadow"] = "-2px 2px 20px 0px #dfdfdf";
      el.style["color"] = "#c22020";
      el.style["border-radius"] = "5px";
    });

    el.addEventListener('mouseleave', () => {
      infowindow.close(map, marker);
      el.style["box-shadow"] = "none";
      el.style["color"] = "inherit";
      el.style["border-radius"] = "0";
    });

    this.markers[marker.businessId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.businessId].setMap(null);
    delete this.markers[marker.businessId];
  }
}

export default MarkerManager;
