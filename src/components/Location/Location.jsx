import React, {useContext} from 'react'
import { withRouter } from 'react-router';
import { useHistory } from 'react-router-dom';
import { CoordenadasContext } from '../../context/location-context'
import MapboxGLMap from './MapGL.jsx'
import { useTranslation } from 'react-i18next'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';


const styles = makeStyles((theme) => ({
    root:{
        margin: theme.spacing(2, 4),
        display: 'flex',
        flexFlow: "row-wrap",
        flexDirection: 'column',
        alignItems: 'center'
    },
    map:{
    },
    button:{
        color: "#FFFFFF",
        background: "#B80913",
    }
}));

const Location = () =>{
    const [coord] = useContext(CoordenadasContext)
    const image = './assets/img/logoB.png'
    const history = useHistory();
    const classes = styles();
    const {t} = useTranslation()
    return (
        <Box className={classes.root}>
            <div className= "coordenadas">
                <div> Longitude: {coord.lng} | Latitude: {coord.lat} </div>
            </div>           
            <img src={image} alt={'im'} className="center" />
            <Button className={classes.button} onClick={() => {history.push(`/home`)}}>{t("Location.SearchProducts")}</Button>
            
            <MapboxGLMap></MapboxGLMap>
            
        </Box>
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
