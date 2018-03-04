import { combineReducers } from 'redux'
import { newsReducers } from "./newsReducer"
import {allRoutesReducers} from "./allRoutesReducer"
import {oneRouteReducers} from "./oneRouteReducer"

const AppReducers = combineReducers({
    news: newsReducers,
    routes: allRoutesReducers,
    route: oneRouteReducers,
})

export default AppReducers