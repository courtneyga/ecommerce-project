import React from 'react'

function CartDisplayPage ({user, product}) {
    // const cartItems = user.carts

  return (
    <div className='cart-container'>
        <div className='cart-body'>
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