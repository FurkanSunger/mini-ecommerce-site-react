import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllProducts from "./components/AllProducts";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={AllProducts} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/:id" component={ProductDetail} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
