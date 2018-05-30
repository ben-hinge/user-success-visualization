import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

const demoFancyMapStyles = require("../styles/demoFancyMapStyles.json");

class Map extends Component {
    render() {
        const HingeGoogleMap = withGoogleMap(props => (
            <GoogleMap
                defaultCenter = { { lat: 39.8333333, lng: -98.585522 } }
                defaultZoom = { 5 }
                defaultOptions= {{ styles: demoFancyMapStyles }}
            >
            </GoogleMap>
        ));
        return(
            <div>
                <HingeGoogleMap
                    containerElement={ <div style={{ height: `1070px` }} /> }
                    mapElement={ <div style={{ height: `100%` }} /> }
                />
            </div>
        );
    }
};

export default Map;