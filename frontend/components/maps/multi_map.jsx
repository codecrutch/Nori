import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

const mapOptions = {
  center: {
    lat: 40.744219,
    lng: -73.9936615
  }, // Manhattan Coords
  zoom: 15
};

class MultiMap extends React.Component {
  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    this.MarkerManager.updateMarkers(this.props.businesses);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.businesses);
  }

  handleMarkerClick(business) {
    this.props.history.push(`business/${business.id}`);
  }

  render() {
    return (
      <div id="map" ref="map" style={{ height: '500px', width: '500px', position: 'relative', left: '-90px'}}>
        Map
      </div>
    );
  }
}

export default withRouter(MultiMap);
