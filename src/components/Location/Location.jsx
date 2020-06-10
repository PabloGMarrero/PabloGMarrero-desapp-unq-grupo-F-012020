import React, {useContext} from 'react'
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';
import { CoordenadasContext } from '../../context/location-context'
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
                
            <button color="inherit" onClick={() => {history.push(`/home`)}}>Buscar productos</button>
            <img src={image} alt={'im'} className="center" />
            <MapboxGLMap></MapboxGLMap>
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
