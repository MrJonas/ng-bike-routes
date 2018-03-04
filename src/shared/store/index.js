import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AppReducers from "./../reducers";

const configureStore = preloadedState =>
    createStore(AppReducers, preloadedState, applyMiddleware(thunk));

export default configureStore;