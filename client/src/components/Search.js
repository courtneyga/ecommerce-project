import React from "react";

function Search({ searchTerm, onSearchChange }) {
  

  return (
    <div className='search-container'>
      <input
        type="text"
        id='search'
        placeholder='search products'
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <button type='submit'>🔍</button>  
    </div>
  );
}

export default Search;