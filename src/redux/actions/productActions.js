import { GETCATEGORIES, GETPRODUCTS } from "./action-types";

export const getProducts = (products) => {
  return {
    type: GETPRODUCTS,
    payload: products,
  };
};

export const getCategories = (categoies) => {
  return {
    type: GETCATEGORIES,
    payload: categoies,
  };
};
