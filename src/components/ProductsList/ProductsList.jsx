import React from 'react';
import Product from '../Product/Product';

const ProductsList = ({products, calculateTotal}) =>{
    return (
        products.length > 0 ?
        products.map( product =>
            <Product
                key={product.productName}
                productName={product.productName}
                price={product.price}
                imageUrl={product.imageUrl}
                handleTotal={calculateTotal}
            />
          )
          : <p>Loading...</p>
    )
}

export default ProductsList;