import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

const aquaticMapStyles = require("../styles/aquaticMapStyles.json");

class Map extends Component {

    constructor(){
        super();
        this.state = {
            lat: 39.8333333,
            lng: -98.585522
        };
        this.updateGeoLocation = this.updateGeoLocation.bind(this);
    }

    updateGeoLocation(lat, lgn) {
        this.setState({
            lat: lat,
            lgn: lgn
        });
    }

    render() {
        const HingeGoogleMap = withGoogleMap(props => (
            <GoogleMap
                defaultCenter = { { lat: this.state.lat, lng: this.state.lng } }
                defaultZoom = { 5 }
                defaultOptions= {{ styles: aquaticMapStyles }}
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
}

export default Map;