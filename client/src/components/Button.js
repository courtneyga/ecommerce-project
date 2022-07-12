import React from 'react'

function Button ({ button, filter} ) {
  return (
    <div>
        <button type='button' onClick={() => filter('Music')}>Music</button>
        <button type='button' onClick={() => filter('Fun + Games')}>Fun + Games</button>
        <button type='button' onClick={() => filter('Reading')}>Reading</button>
        <button type='button' onClick={() => filter('Tech')}>Tech</button>
    </div>
  )
}

export default Button 