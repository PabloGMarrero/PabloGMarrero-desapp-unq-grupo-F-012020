import React, {useState, useContext, useEffect} from 'react'
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { getProducts, getStores } from '../../service/product-service';
import ProductList from '../ProductsList/ProductsList'
import StoreList from '../StoreList/StoreList'
import { CoordenadasContext } from '../../context/location-context';
import { useTranslation } from 'react-i18next'
import Box from '@material-ui/core/Box'
import ProductsPagination from '../ProductsList/ProductsPagination'
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root:{
    margin: "0 auto"
  },
  stores: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontDisplay: 'swap',
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
  },
  products:{
    fontFamily: 'Roboto',
    height: "100%",
    margin: "0 auto",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    width: "80%",
  },
  title:{
    paddingLeft: "150px",
    color: "#EDF2F4",
    width: "500px",
    background: "#D80032",
    borderTopRightRadius: "1em 1.5em",
    borderBottomRightRadius: "1em 1.5em",
  }
}));

const Home = () =>{
  const [coord] = useContext(CoordenadasContext)
  const [productList, setProductList] = useState([])
  const [storeList, setStoreList] = useState([])
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(3);
  const classes = styles()

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
    <Box className={classes.root}>
      <Box>
        <Typography variant="h4" className={classes.title}>{t("Home.Stores")} </Typography>
        <Box className={classes.stores}>
          {storeList ? <RenderStores> </RenderStores> : <p>{t("Home.SearchingStores")}</p>}
        </Box>
      </Box>
      
      <Box>
        <Typography variant="h4" className={classes.title}>{t("Home.Products")}</Typography>
        <Box className={classes.products} >
          <RenderProducts ></RenderProducts>
        </Box>
      </Box>

    </Box>
  );
}
export default withRouter(Home);