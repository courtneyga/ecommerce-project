import React from 'react';
import { NavLink } from "react-router-dom";
import '../App.css';
// import Search from './Search';

function NavBar () {

  
  return (
      <div className='header-container'>
        <NavLink className='logo' to='/landing'>
              <h1>Urban Living</h1>
        </NavLink>
          <div className='nav-container'>
              
            <div className='NavMenu'>
              <NavLink className='Nav-Link' to='/landing'>
                <li>Home</li>
              </NavLink>
              <NavLink className='Nav-Link' to='/shop'> 
                <li>Shop</li>
              </NavLink >
              {/* <NavLink className='Nav-Link' to='/categories'> 
                <li>Categories</li> 
              </NavLink> */}
              <NavLink className='Nav-Link' to='/login'> 
                <li>Login</li> 
              </NavLink>
              {/* <div className="Search-Icon">
                  <input type="text" placeholder="Search..." onChange={e => {setSearchTerm(e.target.value)}}></input>
              </div>  */}
              {/* <Search onSearch={onSearch} /> */}
              {/* <NavLink className='search-container' to='/search'> 
                <label className="search-btn">
                  <button type='submit'>Search</button>
                </label> 
              </NavLink> */}
              <NavLink className='cart-icon' to='/cart'> 
                <label>
                  <span className="fa-solid fa-bag-shopping"></span>
                  {/* <span>1</span> */}
                </label>
              </NavLink>
            </div>
          </div>
      </div>        
  )
}

export default NavBar;