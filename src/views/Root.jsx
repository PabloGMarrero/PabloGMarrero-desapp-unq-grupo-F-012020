import React from 'react';
import './Root.css';
import ContainerRoot from '../components/Location/Location'
import Footer from '../components/Footer/Footer'



export default class Root extends React.Component {
    constructor(props) {
        super(props);
    }

    

    render() {
        return (
            
            <div className="containerRoot">
                 
                  <ContainerRoot></ContainerRoot>
                 <Footer></Footer>
            </div>
            
        )
            
    }
}

