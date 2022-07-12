import { useState, useEffect } from 'react';
// import Categories from './Categories';
import NavBar from './NavBar';
import ProductContainer from './ProductContainer';
import Search from './Search';
import Button from './Button';

function Shop () {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [buttons, setButtons] = useState([]);


  const filter = (button) => {
    const filteredData = products.filter(product => product.category === button)
    setProducts(filteredData)
  }


  useEffect(() => {
    fetch('/products')
      .then((r) => r.json()) 
      .then((productsArray) => setProducts(productsArray)) 
  }, [])

  const displayedProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  
  return (
    <> 
      <NavBar /> 
      <div className='shop-container'>
        <div className='section-title'>  
          <h2>Shop Products</h2>
        </div>
      <Search 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      <Button 
        filter={filter}
      />
      {/* <Categories 
        // handleSortBy={handleSortBy}
        // sortBy={sortBy}
      /> */}
        <div className='shop-content'>
          <ProductContainer
            products={displayedProducts}
          />
        </div>
      </div>
    </>
  )
}
 
export default Shop;