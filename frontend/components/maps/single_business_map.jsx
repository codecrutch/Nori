import React from 'react';

class SingleBusinessMap extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    let business = this.props.business;
    let position = {
      lat: business.lat,
      lng: business.lng
    }
    const mapOptions = {
      center: position,
      zoom: 15
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    var marker = new google.maps.Marker({
      position: position,
      map: this.map,
      icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    })

    let contentString = `<div><strong>${business.name}</strong></div>` +
    `<div>${business.address}</div>` +
    `<div>${business.review_count} reviews</div>` ;

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    marker.addListener('click', function() {
     infowindow.open(this.map, marker);
    });
  }

  render(){
    return (
      <section>
        <div id='map' ref={ map => this.mapNode = map }></div>
      </section>
    );
  }
}

export default SingleBusinessMap;
