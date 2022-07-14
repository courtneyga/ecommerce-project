import { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
 } from 'react-router-dom';

import Landing from './components/Landing';
import Shop from './components/Shop';
import Login from './components/Login';
import Cart from './components/Cart';
import NavBar from './components/NavBar';
// import ProductContainer from './components/ProductContainer';
// import ProductCard from './components/ProductCard';
// import Categories from './components/Categories';
// import ProductCardDetail from './components/ProductCardDetail'

function App () {

  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all")

  useEffect(() => {
    fetch("/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.id) {
          setUser(data);
        }
      });
  }, []);

  useEffect(() => {
    fetch('/products')
      .then((r) => r.json()) 
      .then((r) => setProducts(r)) 
  }, [])

  // Add item to cart
  // function handleAddCartItem(newCartItem){
  //   fetch('/carts', {
  //       method: 'POST',
  //       headers: {'Content-type':'application/json'},
  //       body: JSON.stringify(newCartItem)
  //   })
  //   .then(res => res.json())
  //   .then(newCartItem => {setUser({...user, cart: [...user.carts, newCartItem]})})
  // }

  // const displayedProducts = products.filter((product) => {
  //   return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  const displayedProducts = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase())).filter((product) => {
    if (category === "all") return true
    return product.category === category
  })

  return ( 
    <>
      <div className='big-container'>
          <Router>
            <Switch>
              <Route path="/landing">
                <Landing />
              </Route>
              <Route path="/shop">
                <Shop  
                  user={user}
                  search={search}
                  setSearch={setSearch}
                  // addCartItem={handleAddCartItem}
                  products={displayedProducts}
                  setCategory={setCategory}
                  setProducts={setProducts}
                />
              </Route> 
              {/* <Route path="/categories">
                <ProductCard  />
              </Route>  */}
              <Route path="/login">
                <Login />
              </Route> 
              <Route path="/cart">
                <Cart 
                  products={products}
                  user={user}
                  // cart={cart}
                  // addToCart={addToCart}
                  // handleAddProduct={handleAddProduct}
                />
              </Route>
              {/* <Route path="/product">
                <ProductCardDetail />
              </Route>    */}
            </Switch>
          </Router>
      </div>
    </>
  );
}

export default App