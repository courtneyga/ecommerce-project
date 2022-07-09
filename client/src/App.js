import { useState, useEffect} from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route,
 } from 'react-router-dom';

import Landing from './components/Landing';
import Products from './components/Products';
import Categories from './components/Categories';
import Login from './components/Login';
import Search from './components/Search';
import Cart from './components/Cart';


function App () {
  const [user, setUser] = useState();

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

  return ( 
    <>
      <div className='big-container'>
          <Router>
            <Switch>
              <Route path="/landing">
                <Landing />
              </Route>
              <Route path="/products">
                <Products />
              </Route> 
              <Route path="/categories">
                <Categories  />
              </Route> 
              <Route path="/login">
                <Login user={user} />
              </Route> 
              <Route path="/search">
                <Search />
              </Route> 
              <Route path="/cart">
                <Cart user={user} />
              </Route>  
            </Switch>
          </Router>
      </div>
    </>
  );
}

export default App