import {FETCH_TOKEN, FETCH_TOKEN_ERROR, FETCH_USER, FETCH_USER_ERROR} from "../actions/types";

const initialState = {
    isAuth: false
};

export default function ( state = initialState, action ) {
    switch (action.type) {
        case FETCH_USER:
            return { ...state, isAuth: action.payload };
        case FETCH_USER_ERROR:
            return { ...state, error: action.payload };
        case FETCH_TOKEN:
            return { ...state, token: action.payload };
        case FETCH_TOKEN_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}
