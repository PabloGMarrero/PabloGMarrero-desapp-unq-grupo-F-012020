import React, {useState, useContext, useEffect} from 'react'
import { withRouter } from 'react-router-dom';
import './Home.css';
import Typography from '@material-ui/core/Typography';
import { getProducts, getStores } from '../../service/product-service';
import ProductList from '../ProductsList/ProductsList'
import StoreList from '../StoreList/StoreList'
import { CoordenadasContext } from '../../context/location-context';
import { useTranslation } from 'react-i18next'
import Box from '@material-ui/core/Box'
import ProductsPagination from '../ProductsList/ProductsPagination'

const Home = () =>{
  const [coord] = useContext(CoordenadasContext)
  const [productList, setProductList] = useState([])
  const [storeList, setStoreList] = useState([])
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(3);

  useEffect(() => {    
    const fetchData = async () => {
      setLoading(true);
      const resStores = await getStores(coord.lat,coord.lng)
      setStoreList(resStores.data )
      const resProducts = await getProducts(coord.lat,coord.lng)
      setProductList(resProducts.data )
      setLoading(false);
    }
    fetchData();
  }, [coord]);
  
  //get current products
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = productList.slice(indexOfFirstProduct, indexOfLastProduct)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const RenderProducts=  ()=> {
    return (
      <div>
        <ProductList products = {currentProducts} loading = {loading}></ProductList>
        <ProductsPagination productsPerPage={productsPerPage} 
          totalProducts={productList.length}
          paginate = {paginate}>
        </ProductsPagination>
      </div>
    )
  }

  const RenderStores=  ()=> {
    return (
      <StoreList stores = {storeList} ></StoreList>
    )
  }

  return (
    <Box>
      <Box>
        <Typography variant="h4">{t("Home.Stores")} </Typography>
        <Box className="products" >
          {storeList ? <RenderStores> </RenderStores> : <p>{t("Home.SearchingStores")}</p>}
        </Box>
      </Box>
      
      <Box>
        <Typography variant="h4">{t("Home.Products")}</Typography>
        <Box className="products" >
          <RenderProducts ></RenderProducts>
        </Box>
      </Box>

    </Box>
  );
}
export default withRouter(Home);