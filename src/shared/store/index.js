import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AppReducers from "./../reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
});

const middleware = process.env.NODE_ENV !== 'production' ?
    [require('redux-immutable-state-invariant').default(), thunk] :
    [thunk];

const configureStore = preloadedState =>
    createStore(AppReducers, preloadedState, composeEnhancers(applyMiddleware(...middleware)));

export default configureStore;