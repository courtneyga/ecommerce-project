import { useState } from 'react';
import ProductCardDetail from './ProductCardDetail';

function ProductCard ({ product }) {
  const { name, price, image } = product;

  const [showDetails, setShowDetails] = useState(false)

  const handleDetails = () => {
    setShowDetails(showDetails => !showDetails)
  }

  // function handleClick(e) {
  //   e.preventDefault()
  // }

    fetch(`/products`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((r) => r.json())
    .then((data) => (data))

    return (
      <div className='product-card'>
        <img src={image} alt={name} className='pro-img' />
        <div className='pro-details'>
          <h4 className='pro-name'>{name}</h4>
          <h3 className='pro-price'>${price}</h3>
          <label className='add-cart'>
            <span className='fa-solid fa-cart-plus'></span>
        </label>
        </div>
        <div className='extra-content'>
          {showDetails ? <ProductCardDetail product={product}/> : null}
          <div className='details-btn'>
            <button onClick={handleDetails}>More Info</button>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;

// function ProductCard ({ product }) {
//   const { id, name, description, category, price, image } = product;
  
//     fetch(`/products/${id}`, {
//       method: 'PATCH',
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//     .then((r) => r.json())
//     .then((data) => (data))

//     return (
//       <div className='product-card'>
//         <img src={image} alt={name} className='product-img' />
//         <h2 className='product-name'>{name}</h2>
//         <h3 className='product-cat'>{category}</h3>
//         <p className='product-desc'>{description}</p>
//         <h4 className='product-price'>${price}</h4>
//         <label className='add-cart'>
//           <span className="fa-solid fa-cart-plus"></span>
//         </label>
//       </div>
//     );
// };

// export default ProductCard;