import React from 'react'
import './Home.css';
import { getProducts, getStores } from '../api/productAPI';
import Product from '../Product/Product.jsx';
import Store from '../Store/Store.jsx';
import Total from '../Product/Total.jsx';
import {withRouter} from 'react-router';
import SplitPane, { Pane } from 'react-split-pane';

class Home extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    total: 0,
    productList: "",
    storeList: []
  };

  this.createProduct = this.createProduct.bind(this);
  this.calculateTotal = this.calculateTotal.bind(this);
  this.showProduct = this.showProduct.bind(this);
  this.createStore = this.createStore.bind(this);
}



componentDidMount() {
  getProducts(this.props.location.state.coord.long,this.props.location.state.coord.lat)
    .then(productList => this.setState({ productList }))
    .catch(error => this.setState({ error }));

    getStores(this.props.location.state.coord.long,this.props.location.state.coord.lat)
    .then(storeList => this.setState({ storeList }))
    .catch(error => this.setState({ error }));  
 
}


createProduct(product) {
  this.setState({
    products: this.state.productList.push(product)
  });
}

createStore(store) {
  this.setState({
    stores: this.state.storeList.push(store)
  });
}

calculateTotal(price) {
  this.setState({
    total: this.state.total + price
  });
  console.log(this.state.total);
}

showProduct(info) {
  console.log(info);
  alert(info);
}

renderStores() {
  const { storeList } = this.state;
  return (
    <div>
      {storeList.map(store => <Store data={store} />)}
    </div>
  );

}


render() {
  
  if (!this.state.productList) return <p>loading...!!!!</p>;

  var component = this;
  var products = this.state.productList.map(function(product) {
    return (
      <Product
        productName={product.productName}
        price={product.price}
        imageUrl={product.imageUrl}
        handleShow={component.showProduct}
        handleTotal={component.calculateTotal}
      />
    );
  });


  console.log(this.state.storeList)
  console.log(this.state.productList)
  return (

   
    <div>
        <h3>Comercios Cerca tuyo</h3>
        <div>{this.renderStores()}</div>

        <h3>Productos Cerca tuyo</h3>
        <div className="products">
            {products}
        </div>
        <div className="total">
          <Total total={this.state.total} />
        </div>
    </div>
  );
}
}
export default withRouter(Home);

/*
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

export default withRouter(Home); */