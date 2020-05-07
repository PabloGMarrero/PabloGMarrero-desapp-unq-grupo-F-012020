import React from 'react'
import './Home.css';
import { ProductsService } from '../../service/ProductsService';
import ProductsList from '../ProductsList/ProductsList'
import Navbar from '../Navbar/Navbar';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            products: new ProductsService().getAll()
        }
    }
    render(){
        return (
            <div className="main-body">
                <Navbar></Navbar>
                <ProductsList products = {this.state.products}></ProductsList>
            </div>
        )
    }
}

export default Home;