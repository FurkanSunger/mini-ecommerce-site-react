import { ADDTOCART, REMOVEFROMCART } from "./action-types";

export const addToCart = (cartItem) => {
  return {
    type: ADDTOCART,
    payload: cartItem,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVEFROMCART,
    payload: product,
  };
};
