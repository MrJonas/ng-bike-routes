import {FETCH_NEWS_SUCCESS} from "./../actions/actionTypes";

export function newsReducers(state = {}, action) {
    //console.log(action.type);
    switch (action.type) {
        case FETCH_NEWS_SUCCESS:
            return {news: action.payload};
        default:
            return state;
    }
}