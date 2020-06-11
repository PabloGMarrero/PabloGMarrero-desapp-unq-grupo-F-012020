import React, {useState, useContext, useEffect} from 'react'
import {withRouter} from 'react-router';
import './Home.css';
import { getProducts, getStores } from '../api/productAPI';
import ProductList from '../ProductsList/ProductsList'
import StoreList from '../ProductsList/StoreList'
import Total from '../Product/Total.jsx';
import { CoordenadasContext } from '../../context/location-context';

const Home = () =>{
  const [coord] = useContext(CoordenadasContext)
  let [total, setTotal] = useState(0)
  const [productList, setProductList] = useState([])
  const [storeList, setStoreList] = useState([])
  const [setError] = useState("")
 


  useEffect(() => {
    
    async function fetchData() {

       //getStores(coord.lat,coord.lng)
     await  getStores(-58.258655, -34.721533)
       .then(storeList => setStoreList(storeList ))


      await getProducts(-58.258655, -34.721533)
        .then(productList => setProductList(productList ))
        .catch(error => setError( error ));
  }
  fetchData();
  
  },[coord, setError, getProducts, getStores, setStoreList, setProductList] );



  console.log(productList)

  const addProduct = (product) => {
    setProductList({
      productList: productList.push(product)
    });
  }

  const addStore = (store) => {
    setStoreList({
      storeList: storeList.push(store)
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
  console.log(storeList)

  const RenderStores=  ()=> {
    return (
      <StoreList stores = {storeList} ></StoreList>
    )
  }

  return (
    <div>
      <div className= "coordenadas">
        <div> Longitude: {coord.lng} | Latitude: {coord.lat} </div>
      </div>  
      <h3>Comercios Cerca tuyo</h3>
      {storeList ? <RenderStores> </RenderStores> : <p>Buscando Comercios</p>}
      
      <h3>Productos Cerca tuyo</h3>
      <div className="products" >
      <RenderProducts ></RenderProducts>
      </div>
      <Total total = {total} />

    </div>
  );
}
export default withRouter(Home);