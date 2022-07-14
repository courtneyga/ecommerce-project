import React from 'react';
// import LandingCat from './LandingCat';
import {Link} from 'react-router-dom';


function Landing ()  {
  return (
    <>
        <div className='discover-container'>
            <div className='big-title'>
              <h4>Start exploring now!</h4>
              <h2>Discover New Collection,</h2>
            </div>
              <p className='text'>
                akljdf; alksf a lsf aljkds flakjdsf al;ksjf alk alk jdsfal;kjfalkdsjf  alkjsd f  l lkja lj lakdjsf aljdfs a;lsdkjfa. kdjf kalsdjf;lksdjf ;alkjsd f;lkj s;dlfjk;lkdsjf lkjsd faldj falkjd flakjs df;lakjs d lfjkasdj f
              </p>
            <div className='cta'>
              <Link to='/shop' className='srt-shp-btn'>Start Shopping</Link>
            </div>
            </div>
      {/* <LandingCat /> */}
    </>
  )
}

export default Landing