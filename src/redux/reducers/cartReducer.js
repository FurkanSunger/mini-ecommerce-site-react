import { ADDTOCART, CLEARCART, REMOVEFROMCART } from "../actions/action-types";

const initialState = {
  cart: [],
};

export default function cartReducers(state = initialState.cart, action) {
  switch (action.type) {
    case ADDTOCART:
      var addedItem = state.find(
        (cart) => cart.product.id === action.payload.product.id
      );
      if (addedItem) {
        var newState = state.map((cartItem) => {
          if (cartItem.product.id === action.payload.product.id) {
            return Object.assign({}, addedItem, {
              quantity: addedItem.quantity + 1,
            });
          }
          return cartItem;
        });
        return newState;
      } else {
        return [...state, { ...action.payload }];
      }

    case REMOVEFROMCART:
      const newstate = state.filter(
        (item) => item.product.id !== action.payload.id
      );
      return newstate;

    default:
      return state;
  }
}
