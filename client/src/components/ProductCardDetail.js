import React from 'react';

function ProductCardDetail ({ product })  {
    const { name, category, price, image, description } = product;
  return (
    <div>
      <div className='pcd-card'>
        {/* <img src={image} alt={name} className='pcd-img' /> */}
        {/* <h4 className='pcd-name'>{name}</h4> */}
        <h4 className='pcd-cat'>{category}</h4>
        <h6 className='pro-desc'>{description}</h6>
        {/* <h3 className='pcd-price'>${price}</h3> */}
      </div>
    </div>
  )
}

export default ProductCardDetail