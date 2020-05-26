import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import ContainerRoot from '../components/Location/Location'
import {withRouter} from 'react-router';
import Footer from '../components/Footer/Footer'



class Root extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
           
            <div>
                 <Navbar></Navbar>
                 <ContainerRoot></ContainerRoot>
                 <Footer></Footer>
            </div>
            
        )
            
    }
}

export default withRouter(Root);