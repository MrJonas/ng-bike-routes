import {FETCH_ROUTE_SUCCESS} from "./../actions/actionTypes";

export function oneRouteReducers(state = {}, action) {
    switch (action.type) {
        case FETCH_ROUTE_SUCCESS:
            return { route: action.payload };

        default:
            return state;
    }
}