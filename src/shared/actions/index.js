import "isomorphic-fetch";
import {FETCH_ROUTE_REQUEST, FETCH_ROUTE_SUCCESS, FETCH_ROUTE_FAILURE, FETCH_NEWS_REQUEST,FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE, ADD_NEWS_REQUEST, FETCH_ALL_ROUTES_FAILURE,FETCH_ALL_ROUTES_REQUEST,FETCH_ALL_ROUTES_SUCCESS} from "./actionTypes";
import {getAppUrl} from './../config';

// Action Creators
const requestNews = () => ({ type: FETCH_NEWS_REQUEST });
const receivedNews = news => ({ type: FETCH_NEWS_SUCCESS, payload: news });
const newsError = () => ({ type: FETCH_NEWS_FAILURE });

export const fetchNews = () => (dispatch, getState) => {
    dispatch(requestNews());
    return fetch(getAppUrl() + "api/news")
        .then(response => response.json())
        .then(news => dispatch(receivedNews(news)))
        .catch(err => dispatch(newsError(err)));
};

const addNewsRequest = () => ({ type: ADD_NEWS_REQUEST });

export const addNews = (newItem) => (dispatch, getState) => {
    dispatch(addNewsRequest());
    return fetch(getAppUrl() +  "api/news", {
        method: 'POST',
        body: JSON.stringify({text: newItem}),
        headers: new Headers({
            'Content-Type': 'application/json'
        })})
        .then(response => response.json())
        .then(news => dispatch(receivedNews(news)))
        .catch(err => dispatch(newsError(err)));
};


//All routes

const requestAllRoutes = () => ({ type: FETCH_ALL_ROUTES_REQUEST });
const receivedAllRoutes = routes => ({ type: FETCH_ALL_ROUTES_SUCCESS, payload: routes });
const allRoutesError = () => ({ type: FETCH_ALL_ROUTES_FAILURE });

export const fetchAllRoutes = () => (dispatch, getState) => {
    dispatch(requestAllRoutes());
    return fetch(getAppUrl() + "api/route/all")
        .then(response => response.json())
        .then(routes => dispatch(receivedAllRoutes(routes)))
        .catch(err => dispatch(allRoutesError(err)));
};

//Stats

//One route

const requestOneRoute = () => ({ type: FETCH_ROUTE_REQUEST });
const receivedOneRoute = route => ({ type: FETCH_ROUTE_SUCCESS, payload: route });
const oneRouteError = () => ({ type: FETCH_ROUTE_FAILURE });

export const fetchOneRoute = (url) => (dispatch, getState) => {
    dispatch(requestOneRoute());
    return fetch(getAppUrl() + `api/route/${url}`)
        .then(response => response.json())
        .then(routes => dispatch(receivedOneRoute(routes)))
        .catch(err => dispatch(oneRouteError(err)));
};

//Latests routes

//Search Route








