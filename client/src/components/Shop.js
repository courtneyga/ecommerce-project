// import React from 'react';
import ProductCard from './ProductCard';
// import Categories from './Categories';
// import ProductContainer from './ProductContainer';
// import Search from './Search';
// import Button from './Button';

function Shop ({addCartItem ,products, setProducts, search, setSearch, setCategory, user}) {

  const productsDisplay = products.map(product => (
      
        <ProductCard
          key={product.id} 
          id={product.id} 
          name={product.name} 
          price={product.price} 
          category={product.category} 
          image={product.image} 
          description={product.description} 
          user={user} 
          addCartItem={addCartItem} 
        /> 
    )
  )

  // const [products, setProducts] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");
  
  // const filter = (button) => {
  //   const filteredData = products.filter((product) => {
  //     return product.category === button
  //   });
  //   setProducts(filteredData);
  // }

  // useEffect(() => {
  //   fetch('/products')
  //     .then((r) => r.json()) 
  //     .then((productsArray) => setProducts(productsArray)) 
  // }, [])

  // const displayedProducts = products.filter((product) => {
  //   return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  // });
  
  return (
  <>
    <div className='shop-search-cat'>
         <select className="cat-container" onChange={(e)=>setCategory(e.target.value)}>
            <option value="all">Categories</option>
            <option value="all">All</option>
            <option value="Music">Music</option>
            <option value="Fun + Games">Fun + Games</option>
            <option value="Reading">Reading</option>
            <option value="Tech">Tech</option>
        </select>
        <div className='search-wrap'>
          <input 
            type="text" 
            placeholder="Search..." 
            className='search-box' 
            value={search} 
            onChange={(e)=>setSearch(e.target.value)} >
          </input>
        </div>
        
      </div>
      <div className='shop-container'>
        {productsDisplay}
    </div>
  </>
      
  
    
    // <> 
    //   <div className='shop-container'>
    //     <div className='section-title'>  
    //       <h2>Shop Products</h2>
    //     </div>
    //   <Search 
    //     // searchTerm={searchTerm}
    //     // onSearchChange={setSearchTerm}
    //   />
    //   {/* <Button 
    //     filter={filter}
    //   /> */}
    //   <Categories 
    //     filter={filter}
    //     // button={buttons}
    //   />
    //     <div className='shop-content'>
    //       <ProductContainer
    //         products={displayedProducts}
    //       />
    //     </div>
    //   </div>
    // </>
  )
} 
 
export default Shop;