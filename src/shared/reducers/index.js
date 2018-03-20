import { combineReducers } from 'redux'
import {allRoutesReducers} from "./allRoutesReducer"
import {oneRouteReducers} from "./oneRouteReducer"

const AppReducers = combineReducers({
    routes: allRoutesReducers,
    route: oneRouteReducers,
})

export default AppReducers