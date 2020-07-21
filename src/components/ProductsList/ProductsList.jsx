import React from 'react';
import Product from '../Product/Product';
import {useTranslation} from 'react-i18next'
import { Box } from '@material-ui/core';
import './ProductList.css'

const LoadingProducts = () =>{
    const {t} = useTranslation()
    return(
        <p id="change-id">{t("ProductList.Loading")}</p>
    )
}
const ProductsList = ({products, loading}) =>{    
    return (
        // <Box className ={classes.products}>
        <Box className ="products">
            {!loading > 0 ?  
            products.map( product =>
            <Product
                key = {product.product.id}
                product={product}    
            />
            )
            : <LoadingProducts></LoadingProducts>}
        </Box>
    )
}

export default ProductsList;
