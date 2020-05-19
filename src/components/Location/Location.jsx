import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router';
import { TextField } from '@material-ui/core';
import Geocode from "react-geocode";



class Location extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className="Location">
                <h1>Buy From Home</h1>

                <form className="input" noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Calle y Numero" />

                </form>
            </div>
        );
    }
}

export default withRouter(Location);