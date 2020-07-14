import React from 'react';
import Product from '../Product/Product';
import {useTranslation} from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const styles = makeStyles((theme) => ({
    products:{
        marginTop: "20px",
        display: 'flex',
        width: "100%"
    },
    
}));

const LoadingProducts = () =>{
    const {t} = useTranslation()
    return(
        <p id="change-id">{t("ProductList.Loading")}</p>
    )
}
const ProductsList = ({products, loading}) =>{    
    const classes = styles();

    return (
        <Box className ={classes.products}>
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
