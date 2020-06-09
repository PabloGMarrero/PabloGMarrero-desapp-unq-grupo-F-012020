import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import ContainerHome from '../components/Home/Home'
import {withRouter} from 'react-router';
import Footer from '../components/Footer/Footer'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (    
            <div>
                 <Navbar></Navbar>
                 <ContainerHome></ContainerHome>
                 <Footer></Footer>
            </div>         
        )        
    }
}

export default withRouter(Home);