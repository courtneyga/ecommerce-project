import React from 'react'

function CartDisplayPage ({user, product}) {
    // const cartItems = user.carts

  return (
    <div className='cart-container'>
        <div className='cart-body'>
            <h2>Product Name</h2>
            <h2>Price</h2>
            <h1>Total</h1>

            {/* {cartItems.map((cart) => (
                <tr key={cart.id}>
                    <img className='cart-image' src={cart.product.image} alt={product.name} />
                </tr>
            ))}  */}
        </div>
    </div>
  )
}

export default CartDisplayPage