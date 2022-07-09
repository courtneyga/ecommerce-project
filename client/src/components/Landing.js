import React from 'react';
import NavBar from './NavBar';
import PersonImage from '../images/t-woman-lp.png';
import Footer from './Footer';
import Shape from '../images/shape.png';


function Landing ()  {
  return (
    <>
      <NavBar />
          <div className='landing-area-container'>
            <div className='landing-area-left'>
              <img src={PersonImage} alt='woman' className='woman' />
              <img src={Shape} alt='shape' className='shape' />
            </div>
            <div className='landing-area-right'>
              <div className='big-title'>
                <h1>Discover New Collection,</h1>
                <h1>Start Exploring Now!</h1>
              </div>
                <p className='text'>
                  akljdf; alksf a lsf aljkds flakjdsf al;ksjf alk alk jdsfal;kjfalkdsjf  alkjsd f  l lkja lj lakdjsf aljdfs a;lsdkjfa. kdjf kalsdjf;lksdjf ;alkjsd f;lkj s;dlfjk;lkdsjf lkjsd faldj falkjd flakjs df;lakjs d lfjkasdj f
                </p>
              <div className='cta'>
                <a href="#" className='btn'>Start Shopping</a>
              </div>
            </div>
          </div> 
      <Footer /> 
    </>
  )
}

export default Landing