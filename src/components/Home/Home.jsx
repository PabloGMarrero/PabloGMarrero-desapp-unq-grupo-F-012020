import React from 'react'
import './Home.css';
import { getProducts } from '../api/productAPI';
import Product from '../Product/Product.jsx';
import {withRouter} from 'react-router';


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products: [],
            error: '',
          }
    }

    componentDidMount() {
        getProducts(this.props.location.state.coord.long,this.props.location.state.coord.lat)
          .then(products => this.setState({ products }))
          .catch(error => this.setState({ error }))
      }

    
    renderProducts() {
        const { products } = this.state;
        if(products.length === 0) {
          return <div>Loading!!</div>
        }
        return (
          <div>
            {products.map(product => <Product data={product} />)}
          </div>
        );
    
      } 


    render(){
      console.log(this.props.location.state)
        return (
                
            <div className="main-body">
                <div className={"Home-Top-Page"}>
                        </div>
                <div>Longitude: {this.props.location.state.coord.long} | Latitude: {this.props.location.state.coord.lat} </div>
                

                <div className="container">
                <h1>Productos cerca tuyo</h1>
                    {this.renderProducts()}
                </div>
                
            </div>
        )
    }
}

export default withRouter(Home); 