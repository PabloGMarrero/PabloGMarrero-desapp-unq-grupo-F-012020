import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router';
import { TextField } from '@material-ui/core';
import { GoogleComponent } from 'react-google-location' 

const API_KEY = "AIzaSyAhVNCPUtWFJOD4CrFBoHEHcMhsb_OGpGg" 

class Location extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            place: null,

        }
    }
    



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


export default withRouter(Location);