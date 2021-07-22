import { GETCATEGORIES, GETPRODUCTS } from "../actions/action-types";

const initialState = {
  products: [],
  categories: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETPRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case GETCATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};
