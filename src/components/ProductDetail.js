import Skeleton from "@yisheng90/react-loading";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { bindActionCreators } from "redux";
import { addToCart } from "../redux/actions/cartActions";

const ProductDetail = (props) => {
  const { id } = useParams();

  const [productDetail, setProductDetail] = useState({});

  const fetchDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProductDetail(response.data);
  };

  useEffect(() => {
    if (id && id !== "") {
      fetchDetail();
    }
    return () => {
      setProductDetail("");
    };
  }, [id]);

  const notify = () => {
    toast.info("Product Added to Cart", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const addtoCart = (product) => {
    props.actions.addToCart({ quantity: 1, product });
    notify();
  };

  const { title, price, description, category, image } = productDetail;

  return (
    <div className="container py-3">
      <ToastContainer />
      {Object.keys(productDetail).length === 0 ? (
        <Skeleton width="100%" height="420px" />
      ) : (
        <div className="row">
          <div className="col-md-4">
            <img className="img-fluid" src={image} alt="img" />
          </div>
          <div className="col-md-8">
            <div className="card-title fw-bold fs-3">{title}</div>
            <div className="card-body">
              <div className="card-text">${price}</div>
              <div className="d-flex my-3">
                <span className="badge rounded-pill bg-info text-light">
                  {category}
                </span>
              </div>
              <button
                type="button"
                onClick={() => addtoCart(productDetail)}
                className="btn btn-warning text-light"
              >
                Add to Cart
              </button>
              <p className="card-text my-5">{description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      addToCart: bindActionCreators(addToCart, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
