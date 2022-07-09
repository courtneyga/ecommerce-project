import React from 'react';
import { NavLink } from "react-router-dom";
import '../App.css';



const NavBar = () => {

  return (
    <>
      <div className='big-wrapper'>
        <div className='nav-container'>
          <div className='Nav'>
            <NavLink className='Nav-Link' to='/landing'>
              <h1>Urban Living</h1>
            </NavLink>
            <div className='NavMenu'>
              <NavLink className='Nav-Link' to='/landing'>
                <li>Home</li>
              </NavLink>
                <NavLink className='Nav-Link' to='/products'> 
                  <li>Products</li>
                </NavLink >
                <NavLink className='Nav-Link' to='/categories'> 
                  <li>Categories</li> 
                </NavLink>
                <NavLink className='Nav-Link' to='/login'> 
                  <li>Login</li> 
                </NavLink>
                <NavLink className='Nav-Link' to='/search'> 
                  <li>Search</li> 
                </NavLink>
                <NavLink className='Nav-Link' to='/cart'> 
                  <li>Cart</li> 
                </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
    
    //         {/* <div className="Search-Icon">
    //             <input type="search" placeholder="Search"></input>
    //             <label className="icon">
    //               <span className="fas fa-search"></span>
    //             </label>
    //         </div>
    //         <div className="Shopping-Icon">
    //             <label className="shopping-icon">
    //               <span className="fa-solid fa-bag-shopping"></span>
    //             </label>
    //         </div> */}
    // </div>
  )
}

export default NavBar