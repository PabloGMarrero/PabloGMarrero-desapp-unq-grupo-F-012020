import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import ContainerRoot from '../components/Location/Location'
import Footer from '../components/Footer/Footer'



export default class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        console.log('root', this.props);
        return (
            
            <div>
                 <Navbar></Navbar>
                  <ContainerRoot></ContainerRoot>
                 <Footer></Footer>
            </div>
            
        )
            
    }
}

