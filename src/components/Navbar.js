import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container py-3">
        <Link className="navbar-brand fs-2" to="/">
          V-Shop
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/cart"
              className="nav-link text-light text-center fs-3 p-0"
            >
              <FaShoppingCart></FaShoppingCart>
              <span className="badge bg-secondary">{props.cart.length}</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducers,
  };
};

export default connect(mapStateToProps)(Navbar);
