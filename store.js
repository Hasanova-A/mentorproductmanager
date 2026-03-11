import { applyMiddleware, createStore } from "redux";
import { productReducer } from "./src/tools/reducers/productReducer";
import { thunk } from "redux-thunk";



export const store = createStore(productReducer, applyMiddleware(thunk))