import React from 'react';
import NavBar from './NavBar';
import image from '../images/tech-polaroid.jpeg';


const Products = () => {
  return (
    <>
      <NavBar />
      <div className='products-container'>
        <div className='product-card'>
          <div className='name'>Test Headphones</div>
          <div className='img'>
            <img src={image} />
          </div>
          <div className='cat'>Music</div>
          <div className='btn'>
                <a href="#" className='btn'>Details</a>
              </div>
        </div>      
      </div>
    </>  
  )
}

export default Products