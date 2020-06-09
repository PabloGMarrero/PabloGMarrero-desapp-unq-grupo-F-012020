import React, {useState, useContext, useEffect} from 'react'
import {withRouter} from 'react-router';
import './Home.css';
import { getProducts } from '../api/productAPI';
import ProductList from '../ProductsList/ProductsList'
import Product from '../Product/Product.jsx';
import Total from '../Product/Total.jsx';
import { CoordenadasContext } from '../../location-context';

const Home = () =>{
  const [coord] = useContext(CoordenadasContext)
  const [total, setTotal] = useState(0)
  const [productList, setProductList] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    //getProducts(coord.lat,coord.lng)
    getProducts(-58.258655, -34.721533)
    .then(productList => setProductList({ productList }))
    .catch(error => setError({ error }));
  },[coord] );

  const createProduct = (product) => {
    setProductList({
      productList: productList.push(product)
    });
  }

  const calculateTotal = (price) => {
    setTotal({
      total: total + price
    });
    //console.log(total);
  }
  
  const showProduct = (info) => {
    alert(info);
  }
  
  const RenderProducts=  ()=> {
    var component = this;
    return (
      <ProductList products = {productList} component = {component} ></ProductList>
    )
  }
  
  return (
    <div>
      <div className= "coordenadas">
        <div> Longitude: {coord.lng} | Latitude: {coord.lat} </div>
      </div>  
      <RenderProducts></RenderProducts>
      <Total total = {total} />
    </div>
    );
}
/*
class Home extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    total: 0,
    productList: "", 
  };

  this.createProduct = this.createProduct.bind(this);
  this.calculateTotal = this.calculateTotal.bind(this);
  this.showProduct = this.showProduct.bind(this);
  
}



componentDidMount() {
  getProducts(-58.258655,-34.721533)
    .then(productList => this.setState({ productList }))
    .catch(error => this.setState({ error }));
 
}

createProduct(product) {
  this.setState({
    products: this.state.productList.push(product)
  });
}

calculateTotal(price) {
  this.setState({
    total: this.state.total + price
  });
  //console.log(this.state.total);
}

showProduct(info) {
  //console.log(info);
  alert(info);
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

return (
  <div>
    {products}
    <Total total={this.state.total} />
  </div>
  );
 }
}*/
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