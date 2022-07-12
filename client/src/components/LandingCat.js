import React from 'react';
import { NavLink } from 'react-router-dom';
import CatCardOne from '../images/music-cat-card.png';
import CatCardTwo from '../images/games-cat-card.png';
import CatCardThree from '../images/reading-cat-card.png';
import CatCardFour from '../images/tech-cat-card.png';

const LandingCat = () => {
  return (
    <>
      <div className='footer-container'>
        <NavLink to={'/categories/Music'} className='cat-card'>
          <img src={CatCardOne} alt='music'></img>
          <h5>Music</h5>
        </NavLink>
        <NavLink to={'/categories/Fun+Games'} className='cat-card'>
          <img src={CatCardTwo} alt='fun and games'></img>
          <h5>Fun + Games</h5>
        </NavLink>
        <NavLink to={'/categories/Reading'} className='cat-card'>
          <img src={CatCardThree} alt='reading'></img>
          <h5>Reading</h5>
        </NavLink>
        <NavLink to={'/categories/Tech'} className='cat-card'>
          <img src={CatCardFour} alt='tech'></img>
          <h5>Tech</h5>
        </NavLink>
      </div>  
    </>
  )
}

export default LandingCat;