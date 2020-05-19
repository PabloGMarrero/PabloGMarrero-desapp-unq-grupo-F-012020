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
                <div className={"Home-Top-Page"}>
                <Navbar></Navbar>
                </div>
                
                

                <div className={"Home-Middle-Page"}>
                    <ProductsList products = {this.state.products}></ProductsList>
                </div>
                
            </div>
        )
    }
}

export default Home;