import React from 'react';
import {withRouter} from 'react-router';
import mapboxgl from 'mapbox-gl';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import Button from '@material-ui/core/Button'
import './Location.css';

//const API_KEY = "AIzaSyAhVNCPUtWFJOD4CrFBoHEHcMhsb_OGpGg" 

mapboxgl.accessToken = 'pk.eyJ1IjoiZXplY2FycmFzY29zYSIsImEiOiJja2FoNnFkZmYwZ3N5MnBvMXNtdGx6c3QyIn0.xR9FIATQVNcdykGIGpITsA';

class Location extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            place: null,
            lng: -58.3225,
            lat: -34.6813,
            zoom: 12

        }
    }

    
    componentDidMount() {
        const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom
        });
         
        map.on('click', () => {
        this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
        
        });
        });

        
        var geocoder = new MapboxGeocoder({
            accessToken: 'pk.eyJ1IjoiZXplY2FycmFzY29zYSIsImEiOiJja2FoNnFkZmYwZ3N5MnBvMXNtdGx6c3QyIn0.xR9FIATQVNcdykGIGpITsA',
            marker: {
                color: 'orange',
                latitude: this.state.lat,
                longitude: this.state.lng
                },
                mapboxgl: mapboxgl
            })
            map.addControl(geocoder);           
        }
        render() {
            console.log(1, this.state);
            console.log(1 , this.props);
           const goToHome =()=>{
                console.log('ejecuto')
                this.props.history.push('/home',{coord: {lat: this.state.lat , long: this.state.lng}})
            }
        return (
        <div>
            <div ref={el => this.mapContainer = el} className='mapContainer'>
            <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
           </div> 

                 <Button variant="contained" size="small" color="primary" align= "center"
                 onClick={() => goToHome()  }>Buscar</Button>




        </div>
        )
    }
}


export default withRouter(Location);



































/*
    render() {
        return (
            <div className="Location">
                <h1>Buy From Home</h1>

                <div >
                <GoogleComponent
            
                    apiKey={API_KEY}
                    language={'en'}
                    country={'country:us'}
                    coordinates={true}
                    placeholder={'Start typing location'}
                   locationBoxStyle={'custom-style'}
                     locationListStyle={'custom-style-list'}
                    onChange={(e) => { this.setState({ place: e }) }} />
                </div>

            </div>
        );
    }
}

*/
