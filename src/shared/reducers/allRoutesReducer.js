import {FETCH_ALL_ROUTES_SUCCESS} from "./../actions/actionTypes";

export function allRoutesReducers(state=null, action) {
    console.log(action.type);
    switch (action.type) {
        case FETCH_ALL_ROUTES_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}