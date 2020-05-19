import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router';



class Login extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className="Login">
                <h1>Login</h1>

                <p>Buy From Home</p>
            </div>
        );
    }
}

export default withRouter(Login);