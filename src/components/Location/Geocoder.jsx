import { Component } from 'react';
import PropTypes from 'prop-types';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

class Geocoder extends Component {


  componentDidMount() {
    const { map } = this.context;

    map.addControl(
      new MapboxGeocoder({
        accessToken: 'pk.eyJ1IjoiZXplY2FycmFzY29zYSIsImEiOiJja2FoNnFkZmYwZ3N5MnBvMXNtdGx6c3QyIn0.xR9FIATQVNcdykGIGpITsA'
      })
    );
  }

  render() {
    return null;
  }

  static contextTypes = {
    map: PropTypes.object.isRequired
  };
}

export default Geocoder;