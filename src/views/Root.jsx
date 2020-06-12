import React from 'react';
import Location from '../components/Location/Location'
import Footer from '../components/Footer/Footer'
import './Home.css'

const Root = () => {
    return (        
        <div className="containerRoot">
            <Location ></Location>
            <Footer></Footer>
        </div>
    )
}

export default Root;
