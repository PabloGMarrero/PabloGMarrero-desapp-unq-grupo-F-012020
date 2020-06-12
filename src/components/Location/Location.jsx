import React, {useContext} from 'react'
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';
import { CoordenadasContext } from '../../context/location-context'
import MapboxGLMap from './MapGL.jsx'
import Button from '@material-ui/core/Button'

const Location = () =>{
    const [coord] = useContext(CoordenadasContext)
    const image = './assets/img/logoB.png'
    const history = useHistory();
    return (
        <div>
            <img src={image} alt={'im'} className="center" />
            <div className= "coordenadas">
                <div> Longitude: {coord.lng} | Latitude: {coord.lat} </div>
            </div>           
                
            <Button variant="contained" size="small" color='secondary' align= "center" onClick={() => {history.push(`/home`)}}>Buscar productos</Button>
            
            <MapboxGLMap className='mapContainer'></MapboxGLMap>
        </div>
    )
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
