import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import { observable } from 'mobx';

const aquaticMapStyles = require("../styles/aquaticMapStyles.json");


class Map extends Component {
    @observable lat
    @observable lng
    @observable zoom

    constructor(lat, lng, zoom) {
        super();

        this.setLat(lat)
        this.setLng(lng)
        this.setZoom(zoom)

        //this.updateGeoLocation = this.updateGeoLocation.bind(this);
    }

    setLat(lat) {
        this.lat = lat
    }

    setLng(lng) {
        this.lng = lng
    }

    setZoom(zoom) {
        this.zoom = zoom
    }

    render() {
        const HingeGoogleMap = withGoogleMap(props => (
            <GoogleMap
                defaultCenter = { { lat: this.lat, lng: this.lng } }
                defaultZoom = { this.zoom }
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