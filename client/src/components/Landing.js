import React from 'react';
import NavBar from './NavBar';
import LandingCat from './LandingCat';

function Landing ()  {
  return (
    <>
      <div className='landing-area-container'>
        <NavBar />
        <div className='discover-container'>
            <div className='big-title'>
              <h4>Start exploring now!</h4>
              <h2>Discover New Collection,</h2>
            </div>
              <p className='text'>
                akljdf; alksf a lsf aljkds flakjdsf al;ksjf alk alk jdsfal;kjfalkdsjf  alkjsd f  l lkja lj lakdjsf aljdfs a;lsdkjfa. kdjf kalsdjf;lksdjf ;alkjsd f;lkj s;dlfjk;lkdsjf lkjsd faldj falkjd flakjs df;lakjs d lfjkasdj f
              </p>
            <div className='cta'>
              <a href="/shop" className='btn'>Start Shopping</a>
            </div>
            </div>
        <LandingCat />
      </div>
    </>
  )
}

export default Landing