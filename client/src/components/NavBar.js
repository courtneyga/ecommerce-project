import React from 'react';
import {Link } from "react-router-dom";
import '../App.css';

function NavBar () {

  
  return (
      <div className='header-container'>
        <Link className='logo' to='/landing'>
          <h1>Urban Living</h1>
        </Link>
          <div className='nav-container'>
            <div className='NavMenu'>
              <Link className='Nav-Link' to='/landing'>
                <li>Home</li>
              </Link>
              <Link className='Nav-Link' to='/shop'> 
                <li>Shop</li>
              </Link >
              <Link className='Nav-Link' to='/login'> 
                <label>
                  <span className="fa-solid fa-user fa-lg" /> Login
                </label>
              </Link>
              <Link className='Nav-Link' to='/cart'> 
                <label>
                  <span className="fa-solid fa-cart-shopping fa-lg" /> Cart
                </label>
              </Link>
            </div>
          </div>
      </div>        
  )
}

export default NavBar;