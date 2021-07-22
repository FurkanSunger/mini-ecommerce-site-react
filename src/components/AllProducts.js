import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getProducts } from "../redux/actions/productActions";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Product from "./Product";
import Skeleton from '@yisheng90/react-loading';

const AllProducts = () => {
  const products = useSelector((state) => state.allProducts.products);
  const categories = useSelector((state) => state.allProducts.categories);
  const dispatch = useDispatch();

  const fetchProducts = async (category) => {
    let url = "https://fakestoreapi.com/products";

    category
      ? (url = url + "/category/" + category)
      : (url = "https://fakestoreapi.com/products");

    const response = await axios.get(url);
    dispatch(getProducts(response.data));
  };

  const fetchCategories = async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    dispatch(getCategories(response.data));
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const filterProducts = (e) => {
    e.preventDefault();
    const category = e.target.textContent.toLowerCase();
    if (category === "all") {
      fetchProducts();
      return;
    }
    fetchProducts(category);
  };

  return (
    <>
      <div className="container">
        {Object.keys(products).length === 0 ? (
           <Skeleton width="100%" height={50} rows={12} />
        ) : (
          <>
            <div className="row">
              <Carousel />
            </div>
            <div className="row">
              <div className="btn-group flex-wrap my-4" role="group">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={filterProducts}
                  key={Math.random()}
                >
                  All
                </button>
                {categories.map((item) => (
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={filterProducts}
                    key={Math.random()}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="row row-cols-lg-4 row-cols-md-4 row-cols-sm-2 row-cols-1 g-4 mb-4">
              <Product />
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;
