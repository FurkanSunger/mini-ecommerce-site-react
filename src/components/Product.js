import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Product = () => {
  const products = useSelector((state) => state.allProducts.products);

  return (
    <>
      {products.map((product) => (
        <div className="col" key={product.id}>
          <Link
            to={`/${product.id}`}
            className="card text-decoration-none h-100"
          >
            <img
              src={product.image}
              className="card-img-top img-fluid product-img"
              alt="img"
            />
            <div className="card-body">
              <h5 className="card-title fs-6">{product.title}</h5>
            </div>
            <div className="card-footer">
              <p className="card-text">${product.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Product;
