import React from 'react';
import ProductShow from './ProductShow';

const ProductList = ( {products, cartClick, productClick }) => {

    const renderedProducts = products.map((product) => {
        return <ProductShow product={product} key={product.id} cartClick={cartClick} onClick={() => productClick(product)}/> 
    })
    return (
        <div className=' flex flex-wrap justify-center mx-auto gap-10'>
            {renderedProducts}                   
        </div>
    );
};

export default ProductList;