import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AppReducers from "./../reducers";

//TODO: Add redux dev tools

const middleware = process.env.NODE_ENV !== 'production' ?
    [require('redux-immutable-state-invariant').default(), thunk] :
    [thunk];

const configureStore = preloadedState =>
    createStore(AppReducers, preloadedState, applyMiddleware(...middleware));

export default configureStore;