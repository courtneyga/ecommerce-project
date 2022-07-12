import React from 'react';
import ProductCard from './ProductCard';

function ProductContainer ({ products }) {
  
    const productCards = products.map((product) => (
        <ProductCard 
            key={product.id}
            product={product}
        />
    ));

  return (
    <div className='product-container'>
      {productCards}
    </div>
  )
}

export default ProductContainer;