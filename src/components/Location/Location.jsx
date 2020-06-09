import React, {useState, useContext} from 'react'
import { withRouter } from 'react-router';
import { Link, useHistory } from 'react-router-dom';
import { CoordenadasContext } from '../../location-context'
import MapboxGLMap from './MapGL.jsx'


const Location = () =>{
    const [coord] = useContext(CoordenadasContext)
    const image = './assets/img/logoB.png'
    const history = useHistory();
    return (
        <div>
            <div className= "coordenadas">
                <div> Longitude: {coord.lng} | Latitude: {coord.lat} </div>
            </div>           
                
            <button color="inherit" onClick={() => {
                //setCoordenadas(this.state.lat, this.state.lng)
                history.push(`/home`)
              }
                    
            }
            >Buscar productos</button>
            <img src={image} alt={'im'} className="center" />
            <MapboxGLMap></MapboxGLMap>
        </div>
    )

}


/*import React, { useContext }  from 'react';
import {withRouter } from 'react-router';
import {Link} from 'react-router-dom';
import mapboxgl from 'mapbox-gl';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import Button from '@material-ui/core/Button'
import './Location.css';
import CoordenadasContext from '../../location-context'

const image = './assets/img/logoB.png'

mapboxgl.accessToken = 'pk.eyJ1IjoiZXplY2FycmFzY29zYSIsImEiOiJja2FoNnFkZmYwZ3N5MnBvMXNtdGx6c3QyIn0.xR9FIATQVNcdykGIGpITsA';

class Location extends React.Component {
    static contextType = CoordenadasContext
    constructor(props){
        super(props);
        this.state = {
            error: '',
            lng: -58.3225,
            lat: -34.6813,
            zoom: 12

        }
    }
   
    componentDidMount() {
        const {coord, setCoordenadas} = this.context   
        const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/navigation-guidance-day-v4',
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom,
        height: '500px',
        attributionControl: false
        });
         
        map.on('click', () => { 
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2),
                
            });
            setCoordenadas(this.state.lat,this.state.lng)   
            alert(coord.lat)
            alert(coord.lng)
         });      
        
    }

    render() {
        
        return (
            
            <div>          
                <img src={image} alt={'im'} className="center" />
                <div ref={el => this.mapContainer = el} className='mapContainer'> </div> 

                <div className= "coordenadas">
                    <div> Longitude: {this.state.lng} | Latitude: {this.state.lat} </div>
                </div>
                   
                
                 <div className= "button-buscar"> 
                    <Link className="nav-link"
                    to={{pathname: "/home"}}>Buscar productos</Link>

                </div>
            
                
                <button color="inherit" onClick={() => {
                    setCoordenadas(this.state.lat, this.state.lng)
                    alert(coord) //||this.props.history.push(`/home`)
                    }
                    
                }
                >Buscar productos</button>
                <p>{`Current coord: ${coord.lat} ${coord.lng}`}</p>
            </div> 
        )
    }
}
*/

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
