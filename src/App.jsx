import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

const App = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/"> 
            <Home />
          </Route>
          <Route path="/login"> 
            <Login />
          </Route>
          <Route path="/register"> 
            <Register />
          </Route>
          <Route path="/products/:category"> 
            <ProductList />
          </Route>
          <Route path="/product/:id"> 
            <Product />
          </Route>
          <Route path="/cart"> 
            <Cart />
          </Route>
        </Switch>
      </Router>
    );
};

export default App;
