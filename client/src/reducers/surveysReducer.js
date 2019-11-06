import {
    FETCH_SURVEYS,
    FETCH_SURVEYS_ERROR,
} from '../actions/types';

const initialState = {
    surveys: [],
    error: null
};

export default function ( state = initialState, action ) {
    switch (action.type) {
        case FETCH_SURVEYS:
            return {...state, surveys: action.payload};
        case FETCH_SURVEYS_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}
