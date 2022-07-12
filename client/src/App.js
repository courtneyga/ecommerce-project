import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
 } from 'react-router-dom';

import Landing from './components/Landing';
import Shop from './components/Shop';
// import Categories from './components/Categories';
import Login from './components/Login';
import Cart from './components/Cart';
import ProductCardDetail from './components/ProductCardDetail'


function App () {
  // const [search, setSearch] = useState("");
  // const [user, setUser] = useState([]);

  // useEffect(() => {
  //   fetch("/me", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((r) => r.json())
  //     .then((data) => {
  //       if (data.id) {
  //         setUser(data);
  //       }
  //     });
  // }, []);

  // const displayProducts = products.filter((product) => 
  //   product.name.toLowerCase().includes(search.toLowerCase())
  // );

  return ( 
    <>
      <div className='big-container'>
          <Router>
            <Switch>
              <Route path="/landing">
                <Landing />
              </Route>
              <Route path="/shop">
                <Shop />
              </Route> 
              {/* <Route path="/categories:type">
                <Categories  />
              </Route>  */}
              <Route path="/login">
                <Login />
              </Route> 
              <Route path="/cart">
                <Cart />
              </Route>
              <Route path="/product">
                <ProductCardDetail />
              </Route>   
            </Switch>
          </Router>
      </div>
    </>
  );
}

export default App