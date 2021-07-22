import React from "react";
import { connect } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { bindActionCreators } from "redux";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const Cart = (props) => {
  const { cart } = props;

  const totalPrice = props.cart.reduce(
    (total, item) => (total += item.product.price * item.quantity),
    0
  );

  const notify = () => {
    toast.error("Product Removed From Cart", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const removeItem = (product) => {
    props.actions.removeFromCart(product);
    notify();
  };

  const clearCartItems = () => {
    props.cart.map((item) => {
      props.actions.removeFromCart(item.product);
    });
    props.history.push("/");
  };

  const modal = () => {
    return (
      <div
        className="modal fade"
        id="finishModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalLabel">
                Congratulations!
              </h5>
              <button
                type="button"
                className="close btn fs-3 p-0"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              You have finished shopping. You will be directed to the homepage.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Back to shopping
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => clearCartItems()}
                data-dismiss="modal"
              >
                Finish the shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container py-3">
      {modal()}
      <h2>Cart</h2>
      <ToastContainer />
      {cart.length > 0 ? (
        <div className="row">
          <div className="col-md-9">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Title</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.product.id}>
                    <th scope="row">
                      <img
                        src={item.product.image}
                        alt="img"
                        className="img-thumbnail"
                        style={{ width: "60px" }}
                      />
                    </th>
                    <td>{item.product.title}</td>
                    <td>{item.quantity}</td>
                    <td>{item.product.price}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => removeItem(item.product)}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-3">
            <div className="card text-dark bg-light mb-3 w-100">
              <div className="card-header">Checkout</div>
              <div className="card-body">
                <div>Total Price: ${totalPrice.toFixed(2)}</div>
                <div>
                  Shipping:{" "}
                  <span className="text-success">
                    {totalPrice.toFixed(2) > 100 ? "Free" : "$2.99"}
                  </span>
                </div>
                <hr />
                <button
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#finishModal"
                >
                  Finish
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="alert alert-danger w-100 my-3">Cart is empty!</div>
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
      removeFromCart: bindActionCreators(removeFromCart, dispatch),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
