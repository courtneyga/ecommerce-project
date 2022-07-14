import React from 'react';
// import ProductCardDetail from './ProductCardDetail';
// import { Link, useParams } from 'react-router-dom';

const ProductCard = ({ name, description, category, price, image, user, addCartItem, product}) => {
  // const [inCart, setInCart] = useState(false)
  // const [showDetails, setShowDetails] = useState(false)
  
  function handleClick(){
    addCartItem(console.log('in cart'))
    // setInCart((prev) => !prev)
}

//   function handleClick(){
//     addCartItem({
//         "user_id" : user.id,
//         "item_id" : id
//     })
//     setInCart((prev) => !prev)
//    }

  // const { name, price, image } = product;
  
  // const [inCart, setInCart] = useState(false)

  // const handleDetails = () => {
  //   setShowDetails(showDetails => !showDetails)
  // }

  // function handleAddCartItem(newCartItem){
  //   fetch('/cart', {
  //       method: 'POST',
  //       headers: {'Content-type':'application/json'},
  //       body: JSON.stringify(newCartItem)
  //   })
  //   .then(res => res.json())
  //   .then(newCartItem => {setUser({...user, carts: [...user.carts, newCartItem]})})
  // }

  // const addToCart = (product) => {
  //   console.log('I am in cart')

  // }

  // function handleClick(){
  //   console.log('I am in addToCart')
  //   addCartItem({
  //       "product_id" : name
  //   })
  //   setInCart((prev) => !prev)
    
  // }

    // className='fa-solid fa-cart-plus'

    // fetch(`/products`, {
    //   method: 'GET',
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    // .then((r) => r.json())
    // .then((data) => (data))

    return (
      <div className='product-card'>
        <div className='pro-details'>
          <h4 className='pro-name'>{name}</h4>
          <img src={image} alt={name} className='pro-img' />
          <p>{category}</p>
          {/* <p>{description}</p> */}
          <h3 className='pro-price'>${price}</h3>
          <div className='pro-cart-btn'>
            <button onClick={() => handleClick()}>Add to cart</button>
          </div>
        </div>
        {/* <div className='extra-content'>
          {showDetails ? <ProductCardDetail product={product}/> : null}
          <div className='details-btn'>
            <button onClick={handleDetails}>More Info</button>
          </div>
        </div> */}
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