import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
 import ProductPage_reducer from "./ProductPage_reducer";

const rootReducer = combineReducers({

    ProductPage:ProductPage_reducer,

})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)) )