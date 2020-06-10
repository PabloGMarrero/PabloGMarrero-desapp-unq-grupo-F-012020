import React, {useState, useContext, useEffect} from 'react'
import {withRouter} from 'react-router';
import './Home.css';
import { getProducts } from '../api/productAPI';
import ProductList from '../ProductsList/ProductsList'
import Total from '../Product/Total.jsx';
import { CoordenadasContext } from '../../context/location-context';

const Home = () =>{
  const [coord] = useContext(CoordenadasContext)
  let [total, setTotal] = useState(0)
  const [productList, setProductList] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    getProducts(-58.258655, -34.721533)
    .then(productList => setProductList(productList ))
    .catch(error => setError( error ));
  },[coord] );

  const createProduct = (product) => {
    setProductList({
      productList: productList.push(product)
    });
  }

  const calculateTotal = (price) => {
    setTotal(total + price);
  }
  
  const RenderProducts=  ()=> {
    return (
      <ProductList products = {productList}
          calculateTotal = {calculateTotal} ></ProductList>
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
export default withRouter(Home);