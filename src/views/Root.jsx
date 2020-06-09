import React from 'react';
import Location from '../components/Location/Location'
import Footer from '../components/Footer/Footer'

export default class Root extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (        
            <div className="containerRoot">
                <Location ></Location>
                <Footer></Footer>
            </div>
        )
    }
}

