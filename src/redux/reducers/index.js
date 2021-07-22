import { combineReducers } from "redux";
import cartReducers from "./cartReducer";
import { productReducer } from "./productReducers";

const reducers = combineReducers({
  allProducts: productReducer,
  cartReducers,
});

export default reducers;
