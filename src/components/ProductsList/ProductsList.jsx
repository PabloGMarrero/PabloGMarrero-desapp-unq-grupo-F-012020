import React, { Component } from 'react';
import Product from '../Product/Product';

const ProductsList = ({products, component}) =>{
    return (
        products.length > 0 ?
        products.map( product =>
            <Product
                productName={product.productName}
                price={product.price}
                imageUrl={product.imageUrl}
                handleShow={component.showProduct}
                handleTotal={component.calculateTotal}
            />
          )
          : <p>Loading...</p>
    )
}

export default ProductsList;